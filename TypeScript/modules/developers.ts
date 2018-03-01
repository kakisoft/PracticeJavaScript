module DeveloperModule {
    export var name = "kaki"; //exportを付けると、外部からアクセスできる
    export module AddressModule { //入れ子にする事もできる
        export var zip = "222-2222";
    }
}

