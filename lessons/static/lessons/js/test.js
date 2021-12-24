const buttonsElem = document.getElementById("buttons");
const headElem = document.getElementById("head");
const pagesElem = document.getElementById("pages");


class Quiz
{
	constructor(type, questions, results)
	{
        this.type = type;
		this.questions = questions;
        this.results = results;
        this.score = 0;
        this.result = 0;
		this.current = 0;
	}

	Click(index)
	{
		
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 

class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 2),
	new Result("Ваш уровень выше среднего", 4),
	new Result("Вы в совершенстве знаете материал", 6)
];

const questions = 
[
	new Question("свойство смежных углов ", 
	[
		new Answer("они равны ", 0),
		new Answer("они перпендикулярны", 0),
		new Answer("их сумма равна 180градусов", 1),
		new Answer("они параллельны", 0)
	]),

	new Question("по свойству степеней при деление мы", 
	[
		new Answer("степени добавляем", 0),
		new Answer("степени умножаем", 0),
		new Answer("степени отнимаем", 1),
		new Answer("степени делим", 0)
	]),

	new Question("8*8-8", 
	[
		new Answer("172", 0),
		new Answer("72", 1),
		new Answer("128", 0),
		new Answer("64", 0)
	]),

	new Question("Плошадь квадрата 9.Чему равна сторона?", 
	[
		new Answer("3", 1),
		new Answer("6", 0),
		new Answer("1,5", 0),
		new Answer("1", 0)
	]),

	new Question("У какого четырехугольника все стороны и углы равны?", 
	[
		new Answer("ромб", 0),
		new Answer("квадрат", 1),
		new Answer("прямоугольник", 0),
		new Answer("трапеция", 0)
	]),

	new Question("2 + 2 / 2 = ", 
	[
		new Answer("1", 0),
		new Answer("2", 0),
		new Answer("3", 1),
		new Answer("4", 0)
	])
];

const quiz = new Quiz(1, questions, results);

Update();

function Update()
{
	if(quiz.current < quiz.questions.length) 
	{
		headElem.innerHTML = quiz.questions[quiz.current].text;

		buttonsElem.innerHTML = "";

		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	}
	else
	{
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	let correct = quiz.Click(index);

	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		btns[index].className = "button button_correct";
	}

	setTimeout(Update, 1000);
}