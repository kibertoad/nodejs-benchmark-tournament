rem Make sure to run this in Admin account
rem
call npm run install-node
call nvm use 16.20.2
timeout /t 2
call npm run benchmark-all
call nvm use 18.17.1
timeout /t 2
call npm run benchmark-all
call nvm use 20.6.1
timeout /t 2
call npm run benchmark-all
call npm run combine-results
