// Первое задание +
alert('aaa@bbb@ccc'.replace(/@/g, '!'));

// Второе задание +
let date = new Date ();
date.setDate(31);
date.setMonth(11);
date.setFullYear(2025);
let opt = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
}
date.toLocaleString('ru', opt)
alert(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());

// Третье задание +
let w = 'Я учу javascript';
document.write(w.substring(0, 1));
document.write(w.substr(0, 1));
document.write(w.slice(0, 1));

// Четвёртое задание +
let e = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;
for (let i = 0; i < e.length; i++) {
let r = Math.pow(e[i], 3);
    sum += r;
}
alert(sum);
alert(Math.sqrt(sum));

// Пятое задание +
let a = 3,
    b = 5,
    c = a - b;
alert(Math.abs(c));

// Шестое задание +
let date2 = new Date ();

function getZero(num) {
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}
alert(date2.getHours() + ':' + date2.getMinutes() + ':' + date2.getSeconds() + ' ' + getZero(date2.getDate()) + '.' + getZero(date2.getMonth() + 1) + '.' + date2.getFullYear());

// Седьмое задание +
let t = 'aa aba abba abbba abca abea';
alert(t.match(/ab+a/g)); 

// Восьмое задание + не идеально конечно так как направлено и на 8029 и на +375, но работает хоть так)
function CheckPhone(number) {
    let regexp = /^(\+?\s?\d{1,3}\s?[-]?\d{2,3})(\s?[-]?\d{3}\s?[-]?\d{2}\s?[-]?\d{2})$/gi;
    if (regexp.test(number) == true) {
        return alert(true);
    } else {
        return alert(false);
    }
}
CheckPhone('3rgergerwg');

// Девятое задание +
function CheckMail(Email) {
    let regexp = /^([a-z]+[0-9a-z_\.]*){2,}[@][a-z]{2,11}\.[a-z]{2,11}$/gi;
    if (regexp.test(Email) == true) {
        return alert(true);
    } else {
        return alert(false);
    }
}
CheckMail('g@mail.ru');

// Десятое задание +
function CheckUrl(Site) {
    let res = Site.match(/(?<=https:\/\/[a-z.]*\/)([a-z0-9.\/]+)(?=#[a-z0-9.\/])/gi);
    alert('https://' + Site.match(/(?<=https:\/\/)[a-z.]*\//gi) + '\n' + res[0] + '\n' + '#' + Site.match(/(?<=#)[a-z0-9.\/]+/gi));
}
CheckUrl('https://catalog.onliner.by/notebookcase/hama/00101550#zag3');