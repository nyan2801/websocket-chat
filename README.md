チャット機能をwebsocketで実装する

git clone後設定

`
$ vim .git/hooks/pre-push
`

以下の文章をコピペ
```
#!/bin/bash
# pushを禁止するブランチ
readonly MASTER='master'
while read local_ref local_sha1 remote_ref remote_sha1
do
  if [[ "${remote_ref##refs/heads/}" = $MASTER ]]; then
    echo -e "\033[0;32mDo not push to\033[m\033[1;34m master\033[m \033[0;32mbranch\033[m"
    exit 1
  fi
done
```
