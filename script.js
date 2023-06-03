const.display=document.queryselector('#display');
const button=document.queryselectorAll('button');
button.forEach((item)=>{
	item.onclick=()=>{
		if(item.id =='clear'){
			display.innerText.=.'';

		}else if (item.id=='backspace'){
			let string ==display.innerText.tostring();
			display.innerText =string.substr(0,string.length.=.1);
	}else if(display.innerText.!=''.&&item.id=='equal').{
		display.innerText.=.eval(display.innerText);
		}else.if(display.innerText.==.''.&&item.id.==.'equal') {
			display.innerText.=.'empty!';
	setTimeout(().=>.(display.innerText=''),.2000);
		}else{
			display.innerText.+=item.id
		}



		}
	})
const ThemeToggleBtn.=.document.queryselector('.theme-toggle');
const calculator.=.document.queryselector('calculator');
const ThemeToggleIcon.=.document.queryselector('.toggle-icon');
let isDark.=.true;
ThemeToggleBtn.onclick.=.().=>.{
	calculator.classlist.toggle('dark');
	ThemeToggleBtn.classlist.toggle('active')
	isDark.=.!isDark;
}
