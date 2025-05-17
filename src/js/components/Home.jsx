import { CardComponent } from "./CardComponent";
import HeroComponent from "./HeroComponent";
import NavbarComponent from "./NavbarComponent";


const navbarItems = [
	{ link: '#', text: 'Home' },
	{ link: '#', text: 'About' },
	{ link: '#', text: 'Services' },
	{ link: '#', text: 'Contact' }
]

const cardSInfo = [
	{
		title: "Titulo 1",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem quas accusantium eum, laudantium alias. Est nam minima odit placeat! Quidem voluptate optio sed delectus et. Mollitia hic quaerat laudantium"
	},
	{
		title: "Titulo 2",
		text: "Lorem ipsum dolor sit aas. Est nam minima odit placeat! Quidem voluptate optio sed delectus et. Mollitia hic quaerat laudantium"
	},
	{
		title: "Titulo 3",
		text: "Lorem ipsum dolor sit amet . Vel autem quas accusantium eum, laudantium alias. Est nam minima odit placeat! Quidem voluptate optio sed delectus et. Mollitia hic quaerat laudantium"
	},
	{
		title: "Titulo 4",
		text: "Lorem idem voluptate optio sed delectus et. Mollitia hic quaerat laudantium"
	},
]

//create your first component
const Home = () => {
	return (
		<>
			<NavbarComponent items={navbarItems} brandText='Start Boostrap' />
			<div className="px-4 px-md-5 my-5">
				<HeroComponent
					title='A Warm Welcome!'
					textBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam commodi tenetur labore, placeat quae dolore, ea temporibus est incidunt repudiandae minus delectus laudantium repellat dolor dolores sit atque consequatur in?"
					buttonText='Call to Action'
				/>
			</div>
			<div className="row px-4 px-md-5 my-5">
				{
					cardSInfo.map((card, index) => (
						<CardComponent key={index} card={card} />
					))
				}
			</div>
		</>
	);
};

export default Home;