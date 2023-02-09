import { createContext, useState } from "react";

export const store = createContext()

const DataFile = (props) => {
    const[data, setData] = useState([
        //Bollywood
        {
            id: 1,
            img:'https://i.gadgets360cdn.com/products/large/Chhatriwali-1-800x800-1674207243685.jpg?downsize=*:420',
            title:'Chhatriwali',
            description:'A condom factorys latest quality control head is a shy woman (Rakul Preet Singh) who is embarrassed about her job. Eventually, she realises the significance of safe sex, and decides to take it upon herself to destigmatise the conversation around sex education.',
            releaseDate:'20 January 2023'
          },
          {
            id: 1,
            img:'https://i.gadgets360cdn.com/products/large/India-Lockdown-1-640x800-1667906603509.jpg?downsize=*:420',
            title:'India Lockdown',
            description:'Four parallel stories exploring the impact of the COVID-19 pandemic on the people of India, inspired by true events.The first story explores a father-daughter duo stuck in different states in the crisis, when the latter is at a very crucial point of her life.A sex workers Shweta Basu Prasad) share of personal and professional challenges during the period follows next.',
            releaseDate:'2 December 2022',
          },
          {
            id: 1,
            img:'https://i.gadgets360cdn.com/products/large/drishyam-2-3-1422x800-1668080885271.jpg?downsize=*:420',
            title:'Drishyam 2',
            description:'Trouble has once again surrounded the Salgaonkars; now that new evidence has entered the picture.Like last time, Vijay Salgaonkar (Ajay Devgn) is determined to protect his family and prevent them from going to prison — even if it means crossing new limits.The crime thriller serves as a sequel to Nisikant Kamats Drishyam (2015), and is the official remake of the 2021 Malayalam suspense drama of the same name.',
            releaseDate:'18 November 2022',
          },
          // Hollywood
          {
            id: 2,
            img: 'https://movies.universalpictures.com/media/02-m3g-dm-mobile-banner-1080x745-sl-f01-120922-6393deb1ec4b4-1.jpg',
            title:'M3gan',
            description:' Gemma (Allison Williams), a talented engineer invents an AI powered smart doll named M3GAN (short for Model 3 Generative ANdroid), and decides to test it on her own niece Cady (Violet McGraw), before the big launch. But soon, things start going awry, as the dolls behaviour and actions arent exactly what she had coded.',
            releaseDate:'13 Jan, 2023'
          },
          {
            id: 2,
            img:'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768_0-sixteen_nine.jpeg?size=1200:675',
            title:'Avatar: The Way Of Water',
            description:' A worthy sequel to the 2009 film Avatar, James Cameron takes us back to the stunning world of Pandora, where human turned Navi Jake Sully (Sam Worthington) and Navi princess Neytiri (Zoe Saldaña) must do everything it takes to protect their children from the sky people (humans from earth).',
            releaseDate:'16 Dec, 2022'
          },
          {
            id: 2,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqSnm487wNiFcZdsN3y5FPWKCmBjUE792sO4xXrvfO5ETlpAsZyKTtFjciVa0tzRxXcc&usqp=CAU',
            title:'Violent Night',
            description:'Violent Night gives an interesting spin to cheesy Christmas movies but fails to recreate their feel good charm.',
            releaseDate:'02 Dec, 2022'
          },
          {
            id: 2,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWg9C3wLf-XSSkdLP_pN8voDIvqR_GZruWF2yxQ5-l1BgqCoprlGoj896uTLKEYAixqvc&usqp=CAU',
            title:'Peaky Blinders',
            description:'Miss and cherish Polly to your hearts content but do come, say goodbye to the Shelbys as they unload their guns. Hopefully, never to pick them up again.',
            releaseDate:'10 Jun, 2022'
          },
          // Technology
          {
            id: 3,
            img:'https://www.unwomen.org/sites/default/files/2022-12/Guatemala_UNTF_MG_2073_1200x800.jpg',
            title:'DigitALL: Innovation and technology for gender equality',
            description:'The theme for International Women’s Day, 8 March 2023 (IWD 2023) is, “DigitALL: Innovation and technology for gender equality”. This theme is aligned with the priority theme for the upcoming 67th Session of the Commission on the Status of Women (CSW-67), “Innovation and technological change, and education in the digital age for achieving gender equality and the empowerment of all women and girls”.',
            releaseDate:'8 March 2023'
          },
          {
            id: 3,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SBvpMuSy-kaM9h4sDpmDZ4Yy6AsUWKCKpg&usqp=CAU',
            title:'Advancing Gender Equality: UN Women at Davos 2023',
            description:'Activating Technology and Innovation for Gender Equality In partnership with HCLTech this high-level panel will revisit the gendered impacts of innovation and technology, and bring together high-level government representatives experts and business leaders in conversation on solutions.',
            releaseDate:'10 JANUARY 2023'
          },
          {
            id: 3,
            img:'https://www.cancer.gov/nano/sites/g/files/xnrzdm216/files/styles/cgov_article/public/cgov_contextual_image/100/800/4/files/vaccine-based-immunotherapy.jpg?h=b26af281&itok=VtxwdFaq',
            title:'Inventing Tech Which Uses One Machine To See & Treat Cancer',
            description:'Dr. Sam Mazin is a computer engineer and the inventor of game-changing technology which fights cancer. RefleXion Medical, his company, has developed a revolutionary machine which can see and treat cancer. Previously, this was done using different technologies Sam shares his journey, from a kid who was crazy about math and science to pursuing computer engineering at a Canadian university which offers a special program which alternates between 4-month study and work placements. He also talks about completing advanced degrees at Stanford University where he was encouraged to combine biology and computing. As they say, the rest is history.',
            releaseDate:'22 JANUARY 2023'
          },
          // Food
          {
            id: 4,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeyStT18e47WzRZ7p6VCuEj821YkZRUSkVQ&usqp=CAU',
            title:'Pizza Hut',
            description:'Pizza Hut began on May 31, 1958,[7] by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[8] The now famous little brick building was close to their childhood home and stomping grounds. The Carney brothers grew up in the College Hill neighborhood amongst many life long Wichita families where tree-lined streets were filled with historical homes with a scenic park as their playground. Six months after their launch, later they opened a second outlet and within a year they had six Pizza Hut restaurants.',
            releaseDate:'15 June 1958'
          },
          {
            id: 4,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8tE7V1rlxQbz_iHOI2P-UCC4nlKdp6bHjXwJSK2xmgtyDqwXZREMcAB0j5trCnm8RPo&usqp=CAU',
            title:'KFC',
            description:'KFC, the most famous food store for chicken lovers. Whenever we think of fried chicken wings our brain immediately takes us to the KFC outlets. Want to know the interesting story behind KFC? So, here is an incredible story behind the success of KFC and the story of the founder is very interesting as well There are some entrepreneurial myths like you have to start at a very young age to become a successful entrepreneur. But, the owner of KFC has proved this myth wrong. Once Dallas Clayton said, “It’s never too late to start something new, to do all those things that you’ve been longing to do.” Now, you can see how this proverb stands perfect for the owner of KFC. Thus, in the blog, you will learn about the journey of the owner of this successful food store Colonel Harland Sanders.',
            releaseDate:'24 Sep 1952' 
          },
          {
            id: 4,
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Maggi_logo.svg/1200px-Maggi_logo.svg.png',
            title:'Maggi',
            description:'The instant noodle brand Maggi, owned by Nestle, has achieved the milestone of 40-years of its journey in India. Since being introduced in 1982, the brand has also entered the business of selling spices, soups, sauces and more, along with its primary and much-loved instant noodle offering',
            releaseDate:'1988'
          },
          // Fitness
          {
            id: 5,
            img:'https://fitnesshacksforlife.org/wp-content/uploads/2023/01/Untitled-Design-2023-01-31T144108.687.png',
            title:'Here are some Practical  Ways to Practice Mindfulness',
            description:'We have been finding it challenging to concentrate on what is going well with the world rather than what is wrong right now because we are all trying to adjust to a new routine of remaining indoors. Sometimes You catch yourself spending hours browsing around your social media account in an effort to stay up to date on the newest news, which is almost always horribleor to feel closer to friends and family. With so many unknowns about the future, it’s simple to become caught in unpleasant feedback loops that eventually lead to increased stress in the body. And right now, the very last factor we have to strengthen our immunity scheme and maintain a good state of mind is stress.',
            releaseDate:'2 Feb 2023'
          },
          {
            id: 5,
            img:'https://fitnesshacksforlife.org/wp-content/uploads/2023/01/Untitled-Design-3.jpg',
            title:'Yoga and Strength',
            description:'Yoga has a long tradition, whose origins go back to the 7th century BC. Goes back to BC. The fact that it has its permanent place in the modern fitness world is not least due to its versatility and uncomplicated execution. Here you can find out why yoga is the ideal addition to strength training and how it helps you to become even stronger, more flexible, and more efficient. Whether yoga against back pain, yoga against tension, or yoga against depression, there are numerous articles on the Internet and specialist magazines that underline yoga’s versatile effects. And how does it look in combination with bench presses, power lifts, and biceps curls',
            releaseDate:'January 31, 2023'
          },
          {
            id: 5,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PwbN9gR1OaBtruiN82kk_Mz5yZWSF3UksA&usqp=CAU',
            title:'The deal with dietary supplements for heart health',
            description:'Blood cholesterol is a waxy, fat-like substance made by the liver. It is essential for good health because the body needs it to perform important jobs, such as making hormones, cells, vitamins, digesting fatty foods, as well as promote normal growth and development. Cholesterol in your diet is found in animal foods, including meat, seafood, poultry, eggs, and dairy products. Diets that include less cholesterol can reduce the risk of heart attack, blocked arteries, and stroke. Low-density lipoprotein (LDL) cholesterol is often called the “bad” cholesterol because it narrows and builds up in the arteries when the level in the blood is too high. HDL cholesterol is the good cholesterol because a healthy level may protect against heart attack and stroke.  HDL carries LDL (bad) cholesterol away from the arteries and back to the liver, where the LDL is broken down and passed from the body.',
            releaseDate:'3 feb 2023'
          }
    ])
    return (
        <store.Provider value={[data, setData]}>
            {props.children}
        </store.Provider>
    )
}

export default DataFile
