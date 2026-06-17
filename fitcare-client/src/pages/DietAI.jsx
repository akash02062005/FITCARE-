import React, { useState } from 'react';
import './DietAI.css';
import dietBanner from '../assets/images/diet-banner.jpg';
import introImg from '../assets/images/intro-diet.jpg';
import diet1 from '../assets/images/diet1.jpg';
import diet2 from '../assets/images/diet2.jpg';
import diet3 from '../assets/images/diet3.jpg';
import tip1 from '../assets/images/tip1.jpg';
import tip2 from '../assets/images/tip2.jpg';
import tip3 from '../assets/images/tip3.jpg';
import benefit1 from '../assets/images/benefit1.jpg';
import benefit2 from '../assets/images/benefit2.jpg';
import benefit3 from '../assets/images/benefit3.jpg';
import DietForm from '../components/DietForm';

const DietAI = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedTip, setExpandedTip] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleTip = (id) => {
    setExpandedTip(expandedTip === id ? null : id);
  };

  return (
    <div className="diet-page">

      <section className="diet-hero" style={{ backgroundImage: `url(${dietBanner})` }}>
        <div className="overlay">
          <h1>Personalized Diet Plans Powered by AI</h1>
          <p>Smart nutrition designed to meet your goals.</p>
        </div>
      </section>

      <section className="diet-intro section-light">
        <div className="container">
          <div className="intro-row">
            <div className="intro-text">
              <h2 style={{ fontSize: '2rem' }}>Why Your Diet Matters</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                A well-balanced diet is key to a healthier body,<br />
                a sharper mind, and a stronger immune system.<br />
                It fuels your day, enhances performance,<br />
                supports long-term wellness,<br />
                and our AI analyzes your lifestyle to deliver personalized, smart nutrition.
              </p>
            </div>
            <div className="intro-img">
              <img src={introImg} alt="Healthy food intro" />
            </div>
          </div>
        </div>
      </section>

      <section className="diet-cards section-white">
        <div className="container">
          <h2 className="section-title">Explore Our Diet Plans</h2>
          <div className="card-row">
            <div className="diet-card">
              <img src={diet1} alt="Weight Loss" />
              <h4>Weight Loss</h4>
              <p>
                AI-recommended low-calorie meals for steady fat burn.
                {expandedCard === 'weight' && (
                  <>
                    <br />This plan includes meal pacing strategies, fiber-rich foods, and hydration techniques that boost metabolism. Designed to help you sustain energy while cutting unnecessary calories and avoiding crash diets.
                  </>
                )}
              </p>
              <button onClick={() => toggleCard('weight')} className="btn btn-outline-primary btn-sm">
                {expandedCard === 'weight' ? 'Show Less' : 'Read More'}
              </button>
            </div>
            <div className="diet-card">
              <img src={diet2} alt="Muscle Gain" />
              <h4>Muscle Gain</h4>
              <p>
                Protein-rich plans that boost growth and strength.
                {expandedCard === 'muscle' && (
                  <>
                    <br />This plan emphasizes nutrient timing, high-quality proteins, and amino acid support. It's tailored for those training hard and looking to increase mass with meals that complement strength workouts.
                  </>
                )}
              </p>
              <button onClick={() => toggleCard('muscle')} className="btn btn-outline-primary btn-sm">
                {expandedCard === 'muscle' ? 'Show Less' : 'Read More'}
              </button>
            </div>
            <div className="diet-card">
              <img src={diet3} alt="Keto Plan" />
              <h4>Keto Friendly</h4>
              <p>
                Low-carb, high-fat options to fuel energy and clarity.
                {expandedCard === 'keto' && (
                  <>
                    <br />The keto diet supports fat adaptation, mental focus, and stable blood sugar. This plan includes smart fat sources, low-carb veggies, and strategies for managing carb cravings effectively.
                  </>
                )}
              </p>
              <button onClick={() => toggleCard('keto')} className="btn btn-outline-primary btn-sm">
                {expandedCard === 'keto' ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="diet-slider section-light">
        <div className="container">
          <h2 className="section-title">AI Diet Tips</h2>
          <div className="slider-row">
            <div className="tip-card">
              <img src={tip1} alt="Tip 1" />
              <p>
                Eat smaller meals throughout the day to stabilize energy levels.
                {expandedTip === 'tip1' && (
                  <> <br />This helps maintain blood sugar, reduces overeating, and supports consistent metabolism throughout your active hours.</>
                )}
              </p>
              <button onClick={() => toggleTip('tip1')} className="btn btn-outline-primary btn-sm">
                {expandedTip === 'tip1' ? 'Show Less' : 'Read More'}
              </button>
            </div>
            <div className="tip-card">
              <img src={tip2} alt="Tip 2" />
              <p>
                Hydration helps metabolize fat — drink 8+ glasses of water daily.
                {expandedTip === 'tip2' && (
                  <> <br />Staying hydrated boosts digestion, improves skin, and keeps your body functioning efficiently during workouts and rest.</>
                )}
              </p>
              <button onClick={() => toggleTip('tip2')} className="btn btn-outline-primary btn-sm">
                {expandedTip === 'tip2' ? 'Show Less' : 'Read More'}
              </button>
            </div>
            <div className="tip-card">
              <img src={tip3} alt="Tip 3" />
              <p>
                Include lean proteins in every meal to promote muscle repair.
                {expandedTip === 'tip3' && (
                  <> <br />Adding sources like eggs, fish, and legumes supports recovery and maintains lean body mass.</>
                )}
              </p>
              <button onClick={() => toggleTip('tip3')} className="btn btn-outline-primary btn-sm">
                {expandedTip === 'tip3' ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="diet-form section-white">
        <div className="container">
          <h2 className="section-title">Get Your Personalized AI Diet</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
              <DietForm />
            </div>
          </div>
        </div>
      </section>

      <section className="diet-benefits section-light">
        <div className="container">
          <h2 className="section-title">Benefits of Smart Eating</h2>
          <div className="card-row">
            <div className="diet-card">
              <img src={benefit1} alt="Energy Boost" />
              <h4>More Energy</h4>
              <p>Feel vibrant throughout your day with nutrient-balanced meals.</p>
            </div>
            <div className="diet-card">
              <img src={benefit2} alt="Immunity Support" />
              <h4>Stronger Immunity</h4>
              <p>Boost your body’s defenses with essential vitamins and minerals.</p>
            </div>
            <div className="diet-card">
              <img src={benefit3} alt="Better Focus" />
              <h4>Sharper Focus</h4>
              <p>Improve concentration and clarity with the right food combos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="diet-cta">
        <div className="container text-center">
          <h2>Ready to Fuel Your Body the Right Way?</h2>
          <p>Start your personalized AI-powered meal plan now!</p>
          <a href="/quiz" className="btn btn-primary">Start Now</a>
        </div>
      </section>
    </div>
  );
};

export default DietAI;

