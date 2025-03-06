

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: '/avatar-1.png',
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: '/avatar-2.png',
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: '/avatar-3.png',
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: '/avatar-4.png',
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: '/avatar-5.png',
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: '/avatar-6.png',
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: '/avatar-7.png',
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: '/avatar-8.png',
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: '/avatar-9.png',
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const TestimonialColumn = (props: {duration?:number, classname?: string, testimonials: typeof testimonials }) => (

  <div className={props?.classname}>
    <motion.div
      animate={{
        translateY:"-50%"
      }}
      transition={{
        duration:props.duration ||10,
        repeat:Infinity,
        ease:'linear',
        repeatType:'loop'
      }}
      
      className='flex flex-col '>
      {[...Array(2).keys()].map((indx) => (
        <div key={indx}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card mb-6">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <img src={imageSrc} alt={name} className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">{name}</div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

    </motion.div>
  </div>
)
export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div>
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-desc mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quasi tenetur quisquam quidem maiores, exercitationem.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_57%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialColumn testimonials={firstColumn} duration={15}/>
          <TestimonialColumn testimonials={secondColumn} classname="hidden md:block" duration={19}/>
          <TestimonialColumn testimonials={thirdColumn} classname="hidden lg:block" duration={17}/>
        </div>
      </div>
    </section>
  );
};
