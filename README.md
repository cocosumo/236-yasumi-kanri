# 【ここすも】契約一覧表


## Contributing

1. Clone or fork this repository.
2. Create a new branch.
3. Make changes.
4. Commit and push your changes.
5. Create a pull request.


## Development

1. Load local kintone manifest

  ```
  npm run upload:local
  ```
2. Install packages
  
  ```
  npm install
  ```

3. Run development

  ```
  npm run dev
  ```

4. Make changes

## Deployment

TODO: We need to improve this flow.

1. Check for typescript errors

  ```
    npm run tsc
  ```

  Fix typescript errors if any. 

  Have to do this step because the build process will not fail even if there are typescript errors.


2. Build for production, then upload to kintone.

  ```
  npm run deploy
  ```

## Updating Types

Refer to package.json for the list of types to update.
Add authentication.

Example:

  ```
  npm run update:[typename] -- -- -u [user] -p [pass]
  ```

## Environment Prerequisites

- NodeJS ^v20.10.0 
- [VSCode Live Server](https://cybozudev.zendesk.com/hc/ja/articles/360026502091-Visual-Studio-Code-Live-Server-Extension%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6kintone%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E9%96%8B%E7%99%BA%E5%8A%B9%E7%8E%87%E3%82%92%E3%81%82%E3%81%92%E3%82%88%E3%81%86-)
- グロバル環境
  ```
  npm install -g dotenv-cli
  ```
- パッケージダウンロード
  ```
  npm install
  ```

## App ID

本番 :  236
開発 :  130