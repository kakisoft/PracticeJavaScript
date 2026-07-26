import { access, unlink } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
// このソースファイルからの相対位置で削除対象を指定する。
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const targetFilePath = path.join(currentDirectory, "target_files", "target_delete_file_01.txt");
async function deleteFileIfPermitted(filePath) {
    try {
        // ファイルが存在し、参照可能であることを確認する。
        await access(filePath, constants.F_OK);
        // ファイル削除には、通常、親ディレクトリへの書き込み権限が必要になる。
        await access(path.dirname(filePath), constants.W_OK);
    }
    catch (error) {
        const code = getErrorCode(error);
        if (code === "ENOENT") {
            console.error(`削除対象のファイルが存在しません: ${filePath}`);
        }
        else if (code === "EACCES" || code === "EPERM") {
            console.error(`ファイルを削除する権限がありません: ${filePath}`);
        }
        else {
            console.error("削除前の確認中にエラーが発生しました:", error);
        }
        return;
    }
    try {
        // 権限は確認後に変わる可能性があるため、unlink の失敗も必ず処理する。
        await unlink(filePath);
        console.log(`ファイルを削除しました: ${filePath}`);
    }
    catch (error) {
        const code = getErrorCode(error);
        if (code === "EACCES" || code === "EPERM") {
            console.error(`ファイルを削除する権限がありません: ${filePath}`);
        }
        else if (code === "ENOENT") {
            console.error(`削除前にファイルがなくなりました: ${filePath}`);
        }
        else {
            console.error("ファイルの削除中にエラーが発生しました:", error);
        }
    }
}
function getErrorCode(error) {
    if (typeof error === "object" && error !== null && "code" in error) {
        return String(error.code);
    }
    return undefined;
}
await deleteFileIfPermitted(targetFilePath);
