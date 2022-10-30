import React from "react";
import HeroBar from "../../components/Hero";
import HeadSet from "../../components/Head";

function AboutPage() {
	return (
		<>
			<HeadSet title={"About"} />
			<HeroBar imgSrc="/bg/about.jpg">
				<h1>AboutPage</h1>
				<h2>This is me!</h2>
			</HeroBar>

			<div className="w-6/12 mx-auto mt-20">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, est.
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
				itaque dolore iste nobis quae possimus blanditiis? Optio rerum veniam
				minima, dicta expedita exercitationem? Nesciunt obcaecati excepturi
				autem repellat. Repellat, fugiat? Tenetur debitis commodi velit, tempore
				ea quam exercitationem non at voluptatum, odio nobis itaque, impedit
				error excepturi sit delectus mollitia dignissimos cum! Beatae optio,
				quaerat quasi expedita dolorum exercitationem autem. Veritatis
				asperiores culpa voluptatibus, quisquam ullam, magnam quo, mollitia
				voluptates impedit odit possimus aut commodi consectetur ipsam
				cupiditate dignissimos facilis adipisci debitis fugit! Dolor enim nemo
				porro, commodi ipsum ducimus. Eligendi sequi rem ipsam mollitia.
				Similique expedita nulla deserunt totam quasi ullam dicta quisquam, cum
				modi quis, velit architecto fugit labore maiores, assumenda eveniet sit
				deleniti impedit temporibus sunt minima! Eos rem, aliquid error nemo
				provident temporibus magni alias consequatur vitae, dolorum
				exercitationem a earum ipsum quasi unde. Sapiente dolorem aspernatur
				corrupti. Quibusdam ea nostrum nisi facere perspiciatis eveniet quaerat.
			</div>
		</>
	);
}

export default AboutPage;
