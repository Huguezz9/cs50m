const SLIDE = {
	title: 'React is Declarative',
	bullets: [
	'Imperative vs Declarative',
	"The browser APIs aren't fun to work with",
	'React allows us to write what we want, and the library wil take care of 	the DOM manipulation',
	],
}

function createSlide0(slide){
	const slideElement = document.createElement('div')

	const title = document.createElement('h1')
	title.innerHTML = SLIDE.title

	return slideElement
}

//DECLARATIVE

function createSlide1(slide){
	return (
		<div>
			<h1>{SLIDE.title}<h1/>
			<ul>
			{SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
			</ul>
		</div>
	)
}

