rd/q/s test-admin

pause

call yarn create react-app test-admin

cd test-admin/

call yarn add react-admin ra-data-json-server prop-types ra-data-fakerest recharts@1.8.5

xcopy /Y ..\scripts\*.* .\src

call yarn start