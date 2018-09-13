Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @glamazon Sign out
21
3 6,297 learn-co-students/javascript-intro-to-functions-lab-bootcamp-prep-000
 Code  Issues 2  Pull requests 5,000+  Projects 0  Insights
Done #80
 Open	tinyinkling wants to merge 1 commit into learn-co-students:master from tinyinkling:master
 Conversation 0   Commits 1   Checks 0   Files changed 12
+31 −0 
     
0  .editorconfig 100644 → 100755
No changes.
     
0  .gitignore 100644 → 100755
No changes.
     
0  .learn 100644 → 100755
No changes.
     
0  CONTRIBUTING.md 100644 → 100755
No changes.
     
0  LICENSE.md 100644 → 100755
No changes.
     
0  README.md 100644 → 100755
No changes.
     
0  index.html 100644 → 100755
No changes.
     
31  index.js 100644 → 100755
@@ -0,0 +1,31 @@
function shout(string) {
  return string.toUpperCase()
}
 function whisper(string) {
  return string.toLowerCase()
}
 function logShout(string) {
  console.log(string.toUpperCase())
}
 function logWhisper(string) {
  console.log(string.toLowerCase())
}
 function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
   if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
   if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
   return "Are you eating enough?"
}
     
