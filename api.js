var variables=[[]]
var varControl=0
var functions=[[]]
var funcControl=0
var keywords=[]
var keywordControl=0 
var splitBy=""
function createCustomHTML(t){
var tag=document.createElement(t)
const html={
appendToBody:function(){document.body.appendChild(tag)},
appendToElementById:function(id){document.getElementById(id).appendChild(tag)},
id:function(id){tag.id=id},
assignClass:function(c){tag.class=c }
}
return html
}
function select(e){
var tag=document.querySelector(e)
const html={
removeFromBody:()=>document.body.removeChild(tag),
removeFromElementById:(id)=>document.getElementById(id).removeChild(tag),
makeInvisible:()=>tag.style.display="none",
getText:()=>tag.innerText, 
placeText:(text)=>tag.innerText=text, 
insertCSS:(css)=>tag.style=css,
createLexer:(main,lexer)=>{
splitBy=main
var translate=tag.innerText.split(main) 
for(var i=0;i<translate.length-1;i++){
console.log(i)
if(lexer[i][0]==="keyword"){
if(lexer[i][2]==="var"){
keywords[keywordControl]=[lexer[i][1],"var"]
keywordControl++
console.log(keywords)
}

if(lexer[i][2]==="function"){
keywords=[lexer[i][1],"function"]
keywordControl++
console.log(keywords)
}


}
}
},//lexer
runProgram:()=>{
var text=tag.innerText.split(splitBy)
for(var i=0;i<text.length;i++){
for(var k=0;k<keywords.length;k++){
if(text[i]===keywords[k][0] && keywords[k][1]==="var"){
variables[varControl]=[text[i+1],text[i+2]] 
console.log(variables)
varControl++
}
}
}
}
}
return html
}
