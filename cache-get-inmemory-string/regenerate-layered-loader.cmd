rem Make sure to run this in Admin account
rem
call npm run install-node
timeout /t 2
call nvm use 16.20.2
timeout /t 2
call npm run benchmark-layered-loader
call nvm use 18.20.8
timeout /t 2
call npm run benchmark-layered-loader
call nvm use 20.19.1
timeout /t 2
call npm run benchmark-layered-loader
call nvm use 22.15.0
timeout /t 2
call npm run benchmark-layered-loader
call npm run combine-results
