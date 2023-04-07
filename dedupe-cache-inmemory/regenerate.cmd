rem Make sure to run this in Admin account
rem
call npm run install-node
timeout /t 2
call nvm use 14.21.3
timeout /t 2
call npm run benchmark-all
call nvm use 16.20.0
timeout /t 2
call npm run benchmark-all
call nvm use 18.15.0
timeout /t 2
call npm run benchmark-all
call nvm use 19.8.1
timeout /t 2
call npm run benchmark-all
call npm run combine-results
