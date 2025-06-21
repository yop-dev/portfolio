@echo off
echo Checking portfolio website files...

set MISSING_FILES=0

if not exist src\App.jsx (
  echo Missing file: src\App.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\App.jsx
)

if not exist src\main.jsx (
  echo Missing file: src\main.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\main.jsx
)

if not exist src\index.css (
  echo Missing file: src\index.css
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\index.css
)

if not exist src\components\Header.jsx (
  echo Missing file: src\components\Header.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\Header.jsx
)

if not exist src\components\Hero.jsx (
  echo Missing file: src\components\Hero.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\Hero.jsx
)

if not exist src\components\About.jsx (
  echo Missing file: src\components\About.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\About.jsx
)

if not exist src\components\Skills.jsx (
  echo Missing file: src\components\Skills.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\Skills.jsx
)

if not exist src\components\Projects.jsx (
  echo Missing file: src\components\Projects.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\Projects.jsx
)

if not exist src\components\OtherProjects.jsx (
  echo Missing file: src\components\OtherProjects.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\OtherProjects.jsx
)

if not exist src\components\Contact.jsx (
  echo Missing file: src\components\Contact.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\Contact.jsx
)

if not exist src\components\Footer.jsx (
  echo Missing file: src\components\Footer.jsx
  set /a MISSING_FILES+=1
) else (
  echo Found file: src\components\Footer.jsx
)

if not exist index.html (
  echo Missing file: index.html
  set /a MISSING_FILES+=1
) else (
  echo Found file: index.html
)

if not exist tailwind.config.js (
  echo Missing file: tailwind.config.js
  set /a MISSING_FILES+=1
) else (
  echo Found file: tailwind.config.js
)

if not exist postcss.config.js (
  echo Missing file: postcss.config.js
  set /a MISSING_FILES+=1
) else (
  echo Found file: postcss.config.js
)

if not exist vite.config.js (
  echo Missing file: vite.config.js
  set /a MISSING_FILES+=1
) else (
  echo Found file: vite.config.js
)

if not exist package.json (
  echo Missing file: package.json
  set /a MISSING_FILES+=1
) else (
  echo Found file: package.json
)

if %MISSING_FILES% equ 0 (
  echo All required files exist. The portfolio website should build successfully.
) else (
  echo %MISSING_FILES% required files are missing. Please check the errors above.
)

pause