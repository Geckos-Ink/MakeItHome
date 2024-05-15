rm -rf dist/

ng build -c=development

rm -rf ../../../MakeItHome/MakeItHome/Resources/assets/fuse
cp -rf dist/fuse/ ../../../MakeItHome/MakeItHome/Resources/assets/fuse

# In app live debug
rm -rf /Users/riccardo/Library/Developer/Xcode/DerivedData/MakeItHome-fhrvzmuslhbobzdpgfnlxmgzyzdn/Build/Products/Debug/MakeItHome.app/Contents/Resources/assets/fuse/
cp -rf dist/fuse/ /Users/riccardo/Library/Developer/Xcode/DerivedData/MakeItHome-fhrvzmuslhbobzdpgfnlxmgzyzdn/Build/Products/Debug/MakeItHome.app/Contents/Resources/assets/fuse/

# XAMPP Server testing
rm -rf /Applications/XAMPP/xamppfiles/htdocs/fuse/fuse-starter/
cp -rf dist/fuse/ /Applications/XAMPP/xamppfiles/htdocs/fuse/fuse-starter/