# dmc-server

## Updates
서버 재부팅 시 자동으로 프로세스 실행

### Prerequisite
80포트 접근 권한을 따로 지정하지 않았음. root로 실행 필요
```shell
sudo su
```

### 서버 실행
```shell
$ pm2 start ./ecosystem.config.js
```

### 서버 상태 확인
```shell
$ pm2 status
```

### 서버 Reload
```shell
$ pm2 reload dmc-server
```

### 프로세스 삭제
```shell
$ pm2 delete [PROCESS_ID]
```

### 프로세스 전체 삭제
```shell
$ pm2 kill
```
