export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: { //Cambiar por la config personal
        "type": "service_account",
        "project_id": "apcoderhouse32065-523a8",
        "private_key_id": "6c50cfe9c4364f22268ffc95af4a8cd0b8100ba9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDM38tPKzNScxX/\nliQdFwx0knKHCjkMjm7YonhufZYB5kdGHvxuIJVW1/x2tkU8ECj7zclhQx2uiaFI\n//x9anBkCSBLsLTDBAeiOJ56sPjEVN0S1IJaVWoSEQZn6H59lCkJMPJBmimphk7C\nYBJFKWNt+61LWwdhWXANV+OdAN5wjrog6UEt6QH3TUBjKQHlDXv3ttKBs/h9+zqx\n8fVsLiVAgMeBpJ+qrRCg4qPhcayMh+kZFJLGnLKIkw9MvALtQoDxfxXYgHiNiVmT\nfnnwrO0SbrboDGovWSUKX+WoNmX7b0Sr5Lx8JtrB21rKlJO1Aw1q1DFx6GTspUSb\nlqoGRQULAgMBAAECggEAF6Dl+2MBn8w7KMehsaMzYgxz3gQ9USfqO9z9I80jLGPp\nK3quZWsnniT57p0V/hflCimRRMDvXu5rphY0Aijw/nCZA3HFX0qLMNfz2zWm80nQ\nV3gf8pgwTBYflYNYd1ZLp044Wn2TuYQOeFeJM+XSnGAu++ZrQvyEMl3FGBn+DaAL\nntxz6lViNUsT21Z2IYU0tew2IdcaOkPXgKSehQ53YdN/SuroN+bp7/xHC62xHsFC\naBuZNsMmMBt0i7rkdDcypXPA2zMK5VDi33q1qI/Vqz/ObhtuJntFmL6suWAOmCm5\n29sj7QuFFQHxnimIsAJbF0gqKjxaN9sDaUpU+IV2nQKBgQDl7X/o/WZfb91SfyKt\n9SBTLwj3DXAsmIG1fePuPnsSPIAiQTXNyb0Rv+uP9GTyZqEPVSycnJnN6l/d+Tm9\nFkwVe7u73b5J87wSLowAHi27zlmYb/VCFi2hdn5+D7Z57ws4D+SLzJJAtx69m8/J\nvQAmPMEMWKpSu9ndebtBLKQw/wKBgQDkGwXyMyRXfGcz71wv71bXFk9Tmm1rW1qb\nDKktV9VNF2E4KXrSZKZv7/qVDbm0J68YtzAkjXkDbiKBxq7a9kCmEMTHzUaSxgrY\nuz4z3427PvxsHfgoWvakPm+0/CrGqpUxUh1+j8vN3F54blpX4QvtADUREYC1zjGP\nZHPYhYzf9QKBgBbIh+owYdqHHSk1i9ws8/0KJhtE656fpgqz5MgQzOUrtY6vY4N2\nwBNoLxFeqDoUzVTVncwPAHaVCNbYAU6pTPS8BAhDmr19N1+d2SWR1/pKIjqmrWjV\nBcSAF1yqdexzMWtmt8Dajot3Gca0D8zvu3oOfxqYFpiIILh/fXyhzctFAoGBALxt\nWj8VYgrm1/W932A1jH3GjybXpVWOtEzqa4HqUWgKTSPwl+XegOJs0Yl5OhMIyQpY\noOtA9lsQCm87qct0qjjEF1mZR5gNAn7ARgThwZmQ0UGajBkB80X/0ZUmzUspNG72\njyiyLj/SrzM6rWR0ob5Ycn20AKeuOaBi8ZNF1vZVAoGBAJ/WmFvtHw2LKHNZ4w+2\nJbTgYbg6b+5jM5vFemSiUdPFz0frFX20G1ldCqa9kw1tw9GNTCbEvAsXmcHlkmxq\niMikwQTyFvbdmWX5v1jnlC0Xm4kFQMVms2WoWop/S8YaTbd05O7Fh/cUjsiTiAgs\nDC4qWyqzLwUIYijaOLHVTWlp\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-i663m@apcoderhouse32065-523a8.iam.gserviceaccount.com",
        "client_id": "118040049285920824413",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-i663m%40apcoderhouse32065-523a8.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
