/*
get-ssl-certificate
https://www.npmjs.com/package/get-ssl-certificate

_______________________________________________________________

## SSL証明書(crt) 内容確認ツール
https://tech-unlimited.com/parsecrt.html

## SSL証明書の内容と確認する方法
https://jp.globalsign.com/ssl-pki-info/ssl_practices/authentification.html


_______________________________________________________________
## cert-checkというGemを作った
http://ryoma123.hatenablog.com/entry/2019/02/09/173121

## Goでdicというツールを作った
http://ryoma123.hatenablog.com/entry/2019/03/17/182209
*/

const sslCertificate = require('get-ssl-certificate')


// jp.globalsign.com
// nodejs.org

sslCertificate.get('nodejs.org').then(function (certificate) {
    // console.log(certificate)
    // const c1 = JSON.parse(certificate.issuer); //=> NG


    //========================================
    //               subject　　サブジェクト名
    //========================================
    //  subject:
    //     [Object: null prototype] {
    //       OU: [ 'Domain Control Validated', 'PositiveSSL Wildcard' ],    部署　　部署
    //       CN: '*.nodejs.org' },

    //  subject:
    //     [Object: null prototype] {
    //       businessCategory: 'Private Organization',    業種
    //       serialNumber: '0110-01-040181',              シリアル番号
    //       jurisdictionC: 'JP',                         法人の国/地域
    //       C: 'JP',                                     国または地域
    //       ST: 'Tokyo',                                 都道府県/州
    //       L: 'Shibuya',                                所在地
    //       street: '26-1 Sakuragaoka',                  以降の住所   
    //       O: 'GMO GlobalSign K.K.',                    組織
    //       CN: 'jp.globalsign.com' },                   通称

    // console.log(certificate.subject)
    console.log(certificate.subject.OU)
    console.log(certificate.subject.CN)


    //========================================
    //               issuer　　　発行者名
    //========================================
    // [Object: null prototype] {
    //     C: 'GB',                                                   国または地域
    //     ST: 'Greater Manchester',                                  都道府県/州
    //     L: 'Salford',                                              所在地
    //     O: 'COMODO CA Limited',                                    組織
    //     CN: 'COMODO RSA Domain Validation Secure Server CA' }      通称

    // console.log(certificate.issuer)
    console.log(certificate.issuer.C)
    console.log(certificate.issuer.ST)
    console.log(certificate.issuer.L)
    console.log(certificate.issuer.O)
    console.log(certificate.issuer.CN)


    
    //========================================
    //            subjectaltname
    //========================================
    // subjectaltname: 'DNS:*.nodejs.org, DNS:nodejs.org',

    console.log(certificate.subjectaltname)


    //========================================
    //            infoAccess
    //========================================
    // infoAccess:
    // [Object: null prototype] {
    //   'CA Issuers - URI':
    //    [ 'http://crt.comodoca.com/COMODORSADomainValidationSecureServerCA.crt' ],
    //   'OCSP - URI': [ 'http://ocsp.comodoca.com' ] },

    // console.log(certificate.infoAccess)
    console.log(certificate.infoAccess['CA Issuers - URI'])
    console.log(certificate.infoAccess['OCSP - URI'])



    //========================================
    //              modulus
    //========================================
    // modulus:
    // 'B56CE45CB740B09A13F64AC543B712FF9EE8E4C284B542A1708A27E82A8D151CA178153E12E6DDA15BF70FFD96CB8A88618641BDFCCA03527E665B70D779C8A349A6F88FD4EF6557180BD4C98192872BCFE3AF56E863C09DDD8BC1EC58DF9D94F914F0369102B2870BECFA1348A0838C9C49BD1C20124B442477572347047506B1FCD658A80D0C44BCC16BC5C5496CFE6E4A8428EF654CD3D8972BF6E5BFAD59C93006830B5EB1056BBB38B53D1464FA6E02BFDF2FF66CD949486F0775EC43034EC2602AEFBF1703AD221DAA2A88353C3B6A688EFE8387811F645CEED7B3FE46E1F8B9F59FAD028F349B9BC14211D5830994D055EEA3D547911E07A0ADDEB8A82B9188E58720D95CD478EEC9AF1F17BE8141BE80906F1A339445A7EB5B285F68039B0F294598A7D1C0005FC22B5271B0752F58CCDEF8C8FD856FB7AE21C80B8A2CE983AE94046E53EDE4CB89F42502D31B5360771C01C80155918637490550E3F555E2EE75CC8C636DDE3633CFEDD62E91BF0F7688273694EEEBA20C2FC9F14A2A435517BC1D7373922463409AB603295CEB0BB53787A334C9CA3CA8B30005C5A62FC0715083462E00719A8FA3ED0A9828C3871360A73F8B04A4FC1E71302844E9BB9940B77E745C9D91F226D71AFCAD4B113AAF68D92B24DDB4A2136B55A1CD1ADF39605B63CB639038ED0F4C987689866743A68769CC55847E4A06D6E2E3F1',
 
    // console.log(certificate.modulus)



    //========================================
    //              bits
    //========================================
    // bits: 4096,

    console.log(certificate.bits)


    //========================================
    //            exponent
    //========================================
    // exponent: '0x10001',

    console.log(certificate.exponent)


    //========================================
    //            pubkey
    //========================================
    // pubkey:
    // <Buffer 30 82 02 22 30 0d 06 09 2a 86 48 86 f7 0d 01 01 01 05 00 03 82 02 0f 00 30 82 02 0a 02 82 02 01 00 b5 6c e4 5c b7 40 b0 9a 13 f6 4a c5 43 b7 12 ff 9e ... 500 more bytes>,

    // console.log(certificate.pubkey)


    //========================================
    //            valid_from
    //========================================
    // valid_from: 'Aug 14 00:00:00 2017 GMT',

    console.log(certificate.valid_from)


    //========================================
    //            valid_to
    //========================================
    // valid_to: 'Nov 20 23:59:59 2019 GMT',

    console.log(certificate.valid_to)



    //========================================
    //            fingerprint
    //========================================
    // fingerprint:
    // '01:02:59:D9:C3:D2:0D:08:F7:82:4E:44:A4:B4:53:C5:E2:3A:87:4D',

    // console.log(certificate.fingerprint)



    //========================================
    //            fingerprint256
    //========================================
    // fingerprint256:
    // '69:AE:1A:6A:D4:3D:C6:C1:1B:EA:C6:23:DE:BA:2A:14:62:62:93:5C:7A:EA:06:41:9B:0B:BC:87:CE:48:4E:02',

    // console.log(certificate.fingerprint256)



    //========================================
    //            ext_key_usage
    //========================================
    // ext_key_usage: [ '1.3.6.1.5.5.7.3.1', '1.3.6.1.5.5.7.3.2' ],

    // console.log(certificate.ext_key_usage)


    
    //========================================
    //            serialNumber
    //========================================
    // serialNumber: '66593D57F20CBC573E433381B5FEC280',

    // console.log(certificate.serialNumber)


    //========================================
    //                raw
    //========================================
    // raw:
    // <Buffer 30 82 06 4b 30 82 05 33 a0 03 02 01 02 02 10 66 59 3d 57 f2 0c bc 57 3e 43 33 81 b5 fe c2 80 30 0d 06 09 2a 86 48 86 f7 0d 01 01 0b 05 00 30 81 90 31 ... 1565 more bytes>,
 
    // console.log(certificate.raw)


    //========================================
    //            pemEncoded
    //========================================
    // pemEncoded:
    // '-----BEGIN CERTIFICATE-----\nMIIGSzCCBTOgAwIBAgIQZlk9V/IMvFc+QzOBtf7CgDANBgkqhkiG9w0BAQsFADCB\nkDELMAkGA1UEBhMCR0IxGzAZBgNVBAgTEkdyZWF0ZXIgTWFuY2hlc3RlcjEQMA4G\nA1UEBxMHU2FsZm9yZDEaMBgGA1UEChMRQ09NT0RPIENBIExpbWl0ZWQxNjA0BgNV\nBAMTLUNPTU9ETyBSU0EgRG9tYWluIFZhbGlkYXRpb24gU2VjdXJlIFNlcnZlciBD\nQTAeFw0xNzA4MTQwMDAwMDBaFw0xOTExMjAyMzU5NTlaMFkxITAfBgNVBAsTGERv\nbWFpbiBDb250cm9sIFZhbGlkYXRlZDEdMBsGA1UECxMUUG9zaXRpdmVTU0wgV2ls\nZGNhcmQxFTATBgNVBAMMDCoubm9kZWpzLm9yZzCCAiIwDQYJKoZIhvcNAQEBBQAD\nggIPADCCAgoCggIBALVs5Fy3QLCaE/ZKxUO3Ev+e6OTChLVCoXCKJ+gqjRUcoXgV\nPhLm3aFb9w/9lsuKiGGGQb38ygNSfmZbcNd5yKNJpviP1O9lVxgL1MmBkocrz+Ov\nVuhjwJ3di8HsWN+dlPkU8DaRArKHC+z6E0igg4ycSb0cIBJLRCR3VyNHBHUGsfzW\nWKgNDES8wWvFxUls/m5KhCjvZUzT2Jcr9uW/rVnJMAaDC16xBWu7OLU9FGT6bgK/\n3y/2bNlJSG8HdexDA07CYCrvvxcDrSIdqiqINTw7amiO/oOHgR9kXO7Xs/5G4fi5\n9Z+tAo80m5vBQhHVgwmU0FXuo9VHkR4HoK3euKgrkYjlhyDZXNR47smvHxe+gUG+\ngJBvGjOURafrWyhfaAObDylFmKfRwABfwitScbB1L1jM3vjI/YVvt64hyAuKLOmD\nrpQEblPt5MuJ9CUC0xtTYHccAcgBVZGGN0kFUOP1VeLudcyMY23eNjPP7dYukb8P\ndognNpTu66IML8nxSipDVRe8HXNzkiRjQJq2Aylc6wu1N4ejNMnKPKizAAXFpi/A\ncVCDRi4AcZqPo+0KmCjDhxNgpz+LBKT8HnEwKETpu5lAt350XJ2R8ibXGvytSxE6\nr2jZKyTdtKITa1WhzRrfOWBbY8tjkDjtD0yYdomGZ0Omh2nMVYR+SgbW4uPxAgMB\nAAGjggHVMIIB0TAfBgNVHSMEGDAWgBSQr2o6lFoL2JDqElZz30O0Oija5zAdBgNV\nHQ4EFgQUcMdzKdAgAd58S29IuEIabcmg6jcwDgYDVR0PAQH/BAQDAgWgMAwGA1Ud\nEwEB/wQCMAAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCME8GA1UdIARI\nMEYwOgYLKwYBBAGyMQECAgcwKzApBggrBgEFBQcCARYdaHR0cHM6Ly9zZWN1cmUu\nY29tb2RvLmNvbS9DUFMwCAYGZ4EMAQIBMFQGA1UdHwRNMEswSaBHoEWGQ2h0dHA6\nLy9jcmwuY29tb2RvY2EuY29tL0NPTU9ET1JTQURvbWFpblZhbGlkYXRpb25TZWN1\ncmVTZXJ2ZXJDQS5jcmwwgYUGCCsGAQUFBwEBBHkwdzBPBggrBgEFBQcwAoZDaHR0\ncDovL2NydC5jb21vZG9jYS5jb20vQ09NT0RPUlNBRG9tYWluVmFsaWRhdGlvblNl\nY3VyZVNlcnZlckNBLmNydDAkBggrBgEFBQcwAYYYaHR0cDovL29jc3AuY29tb2Rv\nY2EuY29tMCMGA1UdEQQcMBqCDCoubm9kZWpzLm9yZ4IKbm9kZWpzLm9yZzANBgkq\nhkiG9w0BAQsFAAOCAQEASDpkkfX7Feoa0/C/m+DkAZRzg+mEacWfk2CPQEl5y+Xf\nUHxIaN9boBvU9vYTonmy4+cIolVEgoIAWE4ckHZe8UDG1xpDbLOTxMFDzZlw5Q1K\nhGklibNxlNRKV+esSH+vQMBGbOYXBnJrEv0TwrR+autRyBRq+PArgmAUFyzwp/dU\nne+t90j8ys/qcjy0nJ2u2/9uh5smb/9rQT3VbVCipJQetpionZXDGNWSwJvMK+kI\n6/1bESkdRFPIFqmd5u6R9HVk1GHz3vy8oAq6HuqiyVmV3ylIeuui1PN/MJ7wNmpK\nHmJx6deP0rullujAEXAf0QRFq39TiLld//8aIx/ZSg==\n-----END CERTIFICATE-----' }
 
    console.log(certificate.pemEncoded)

    

});


