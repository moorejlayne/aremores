import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { IoWaterOutline, IoPersonOutline, IoBedOutline, IoBasketballOutline } from 'react-icons/io5';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { MdDirectionsWalk } from 'react-icons/md';
import { GrRestroom } from 'react-icons/gr';
import { ImFire } from 'react-icons/im';

export const rentalData = {
	pineCone: {
		reviews: {
			0: {
				review: 'Thank you for letting us stay in your beautiful lodge.  It truly is a great place for family togetherness.  All the little “extras” really make the difference.  I look forward to future stays in your lodge. P.S. Love the crows\' nest!',
				author: '',
				date: '7-30-15',
			},
			1: {
				review: 'Staying here was more than we could ever imagined.  So peaceful! Loved sitting around the table with family.  You have thought of everything! All the accommodations anyone would need.  Loved sitting around the fires and relaxing and visiting. Loved being able to look outside at every turn. Thank you so much for the hospitality.',
				author: '',
				date: '',
			},
			2: {
				review: 'Thank you Robin and Ruth. We think you have a real neat place here and are glad to have been able to find you.',
				author: '',
				date: '',
			},
			3: {
				review: 'We had a wonderful time! Your lodge was perfect for us.',
				author: '',
				date: '',
			},
			4:  {
				review: 'This was our family\'s second time and we felt more and more at home with each stay.  There was plenty of room for our family of 3 children and their spouses and children.  Three of our favorite things are the large picture windows which give you a 360 degree view to the beautiful outdoors, the large table and booth which allow seating for 18+ people and a cool, comfortable sleeping environment, allowing everyone to sleep in after an eventful day on the Buffalo.  There are a number of activities for the kids, and kids at heart to do while others enjoy the lodge itself (i.e. pool, basketball, ping pong, tether ball, horseshoes, and fun hikes suitable for children.  And that\'s not including everything there is to do in Ponca, Boxley, Jasper, and Branson, all a short drive away.  This lodge is close to anything one could ever need, especially on a weekend getaway. We can\'t wait to come back!',
				author: '',
				date: '',
			},
			5: {
				review: 'We just wanted to drop you a note to say how much we enjoyed our stay in Pine Lodge.  It was a wonderful experience for the family gathering including our 4 grandbabies.  It is a well-designed, fully accommodating facility.  Thanks so much for creating a home to make memories in.',
				author: '',
				date: '',
			},
			6: {
				review: 'Our stay here was very enjoyable. Your place is very homey and clean and we will definitely be making our way back here to stay again.',
				author: '',
				date: '',
			},
			7: {
				review: 'This was our second stay here. We had such a good time in the summer, I decided to bring more of my family members.  There were 12 of us this time and our stay was even more enjoyable than the first. We might make this an annual event.',
				author: '',
				date: '',
			},
			8: {
				review: 'We enjoyed our stay very much! We brought our youth group for our Fall Retreat and this house exceeded our expectations! We\'ll be back next year!',
				author: '',
				date: '',
			},
			9: {
				review: 'We all loved our stay here! This is actually our second time! The kids loved playing basketball on the court and hiking through the woods. We roasted hot dogs and marshmallows at the fire pit after a day of relaxing, playing, and elk watching! We love this lodge and will definitely be back.',
				author: '',
				date: '',
			},
			10: {
				review: 'Merry Christmas… “and all was well, and all was well, and all manner of things were very well!!” We had 31 total coming and going for a week – 15 overnighters at a time.  Great Memories. The apartment was great for a quiet place for the little one.  Very merry.',
				author: '',
				date: '',
			},
			11: {
				review: 'Thank you so much for letting us use you lodge cabin again this year. The scouts enjoyed the hike, the tree planting, and the use of your fun facilities. The boys (& adults) all had a great time and learned a lot. Thank you again for your generosity.',
				author: '',
				date: '',
			},
		},
		amenities: [
			{
				label: 'Wood Fireplace (wood provided)',
				icon: <ImFire />,
			},
			{
				label: 'Double/twin bunk bed, sofa, attic floor space',
				icon: <IoBedOutline />,
			},
			{
				label: 'Outhouse (no modern plumbing',
				icon: <GrRestroom />,
			},
			{
				label: 'Max. 6 people recommended',
				icon: <IoPersonOutline />,
			},
			{
				label: 'Easy access to hiking and biking trails',
				icon: <MdDirectionsWalk />,
			},
			{
				label: 'Non-potable water for washing',
				icon: <IoWaterOutline />,
			}
		],
		excluded: [
			{
				label: 'Electricity',
				icon: <FaRegLightbulb />,
			},
			{
				label: 'No modern plumbing',
				icon: <IoWaterOutline />,
			},
			{
				label: 'Personal items (sleeping bag, food, utensils, etc.',
				icon: <GiForkKnifeSpoon />,
			}
		]
	},
	pineLodge: {
		reviews: {
			0: {
				review: 'We had a great time at the cabin. It was extremely peaceful and a much needed get-a-way.  Thank you for everything.',
				author: '',
				date: '',
			},
			1: {
				review: 'I would like to thank you for the hospitality we received while staying with you this past weekend. It was exactly what my boys and I were looking for. We loved the rustic charm of the Pine Cone Cabin.  You can tell anyone who may inquire, if they are looking for some peace and quiet to recharge both mind and spirit, this little “gem” in the Ozarks is just the place.',
				author: '',
				date: '',
			},
			2: {
				review: 'Thank you Mr. Robin. We (heart) (heart) the Pine Cone.*',
				author: '*(This family’s second weekend with their 4 young children.)',
				date: '',
			},
		},
		amenities: [
			{
				label: 'Max. 16 people recommended',
				icon: <IoPersonOutline />,
			},
			{
				label: 'Fire pit',
				icon: <ImFire />,
			},
			{
				label: 'Wireless internet',
				icon: <IoBasketballOutline />,
			},
			{
				label: 'Electricity',
				icon: <FaRegLightbulb />,
			}
		]
	}
}