const getGitUsername = async () => {
  const message = 'GitのユーザーIDは';
  const url = 'https://api.github.com/users/sagesaka'

  const json = await fetch(url)
      .then(res => {
          console.log('これは非同期処理成功時のメッセージです')
          return res.json()
      }).catch(error => {
          console.error('これは非同期処理失敗時のメッセージです。', error)
          return null
      });
// awaitコードブロック処理完了後に以降が実行
  const username = json.login;
  console.log(message + username)
}

getGitUsername()