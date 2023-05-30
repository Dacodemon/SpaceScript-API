var variables=[[]]
var functions=[[]]
var keywords=[]
var keywordControl=0
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
var translate=tag.innerText.split(main) 
for(var i=0;i<lexer.length;i++){
if(lexer[i][0]==="keyword"){
if(lexer[i][2]==="var"||lexer[i][2]==="let"||lexer[i][2]==="const"||lexer[i][2]==="variable"||lexer[i][2]==="constant"){
keywords[keywordControl]=[lexer[i][1],"var"]
keywordControl++
}//definition of variable control
if(lexer[i][2]==="function"||lexer[i][2]==="void"){
keywords[keywordControl]=[lexer[i][1],lexer[i][2],lexer[i][3],lexer[i][4],lexer[i][5],lexer[i][6],lexer[i][7],lexer[i][8],lexer[i][9],lexer[i][10],lexer[i][11],lexer[i][12],lexer[i][13]] 
keywordControl++
}//function keyword definition 
if(lexer[i][2]==="array"){
keywords[keywordControl]=[lexer[i][1],"array"]
}
if(lexer[i][2]==="semicolon"||lexer[i][2]==="semi-colon"||lexer[i][2]==="semi colon"){
keywords[keywordControl]=[lexer[i][1],"semicolon"]
}
}//lexer setup
}//for
for(var i=0;i<translate.length;i++){
for(var k=0;k<keywords.length;k++){
if(translate[i]===keywords[k][0] && keywords[k][2]==="var"){

}
}
}
}
}
return html
}
