// ==================== components/CareerPrediction.jsx ====================
// Create this file: src/components/CareerPrediction.jsx

import React, { useState, useEffect } from 'react';
import { Trophy, Target, Award, Calendar, TrendingUp, Star, Zap, Users } from 'lucide-react';
import '../styles/careerPrediction.css';

const CareerPrediction = ({ predictions, playerType, formData }) => {
  const [showCareer, setShowCareer] = useState(false);
  const [careerStats, setCareerStats] = useState(null);
  const [animating, setAnimating] = useState(false);

  const calculateCareerPrediction = () => {
    const ovr = predictions.predicted_ovr;
    const position = predictions.predicted_position;
    const attributes = formData;

    // Career length based on OVR
    let careerYears;
    if (ovr >= 85) careerYears = randomBetween(15, 20);
    else if (ovr >= 75) careerYears = randomBetween(12, 16);
    else if (ovr >= 65) careerYears = randomBetween(10, 14);
    else careerYears = randomBetween(8, 12);

    // Matches per season based on OVR and stamina
    const stamina = attributes.Stamina || 50;
    let matchesPerSeason;
    if (ovr >= 85 && stamina >= 80) matchesPerSeason = randomBetween(45, 55);
    else if (ovr >= 75 && stamina >= 70) matchesPerSeason = randomBetween(38, 48);
    else if (ovr >= 65) matchesPerSeason = randomBetween(30, 42);
    else matchesPerSeason = randomBetween(25, 38);

    const totalMatches = careerYears * matchesPerSeason;

    // Position-based stats
    let goals, assists, cleanSheets;

    if (position === 'GK') {
      // Goalkeepers
      goals = randomBetween(0, 5);
      assists = randomBetween(0, 10);
      
      if (ovr >= 85) cleanSheets = randomBetween(180, 250);
      else if (ovr >= 75) cleanSheets = randomBetween(120, 180);
      else if (ovr >= 65) cleanSheets = randomBetween(80, 130);
      else cleanSheets = randomBetween(40, 90);
      
    } else if (position === 'Striker') {
      // Strikers - High goals
      const finishing = attributes.Finishing || 50;
      const positioning = attributes.Positioning || 50;
      
      if (ovr >= 85 && finishing >= 85) {
        goals = randomBetween(350, 500);
        assists = randomBetween(100, 180);
      } else if (ovr >= 75 && finishing >= 75) {
        goals = randomBetween(200, 350);
        assists = randomBetween(70, 120);
      } else if (ovr >= 65) {
        goals = randomBetween(100, 200);
        assists = randomBetween(40, 80);
      } else {
        goals = randomBetween(50, 120);
        assists = randomBetween(20, 50);
      }
      cleanSheets = 0;
      
    } else if (position === 'Winger') {
      // Wingers - Balanced goals and assists
      const dribbling = attributes.Dribbling || 50;
      const crossing = attributes.Crossing || 50;
      
      if (ovr >= 85) {
        goals = randomBetween(180, 300);
        assists = randomBetween(150, 250);
      } else if (ovr >= 75) {
        goals = randomBetween(120, 200);
        assists = randomBetween(100, 160);
      } else if (ovr >= 65) {
        goals = randomBetween(70, 140);
        assists = randomBetween(60, 110);
      } else {
        goals = randomBetween(40, 90);
        assists = randomBetween(30, 70);
      }
      cleanSheets = 0;
      
    } else if (position === 'Midfielder') {
      // Midfielders - More assists than goals
      const passing = attributes['Short Passing'] || 50;
      const vision = attributes.Vision || 50;
      
      if (ovr >= 85) {
        goals = randomBetween(100, 180);
        assists = randomBetween(180, 280);
      } else if (ovr >= 75) {
        goals = randomBetween(60, 120);
        assists = randomBetween(120, 190);
      } else if (ovr >= 65) {
        goals = randomBetween(35, 80);
        assists = randomBetween(70, 130);
      } else {
        goals = randomBetween(20, 50);
        assists = randomBetween(40, 80);
      }
      cleanSheets = 0;
      
    } else if (position === 'Full-back') {
      // Full-backs - Defensive but some assists
      const crossing = attributes.Crossing || 50;
      
      if (ovr >= 85) {
        goals = randomBetween(30, 60);
        assists = randomBetween(80, 140);
        cleanSheets = randomBetween(100, 160);
      } else if (ovr >= 75) {
        goals = randomBetween(20, 45);
        assists = randomBetween(50, 90);
        cleanSheets = randomBetween(70, 120);
      } else if (ovr >= 65) {
        goals = randomBetween(10, 30);
        assists = randomBetween(30, 60);
        cleanSheets = randomBetween(50, 90);
      } else {
        goals = randomBetween(5, 20);
        assists = randomBetween(15, 40);
        cleanSheets = randomBetween(30, 60);
      }
      
    } else if (position === 'Center-back') {
      // Center-backs - Mainly defensive
      const heading = attributes['Heading Accuracy'] || 50;
      
      if (ovr >= 85) {
        goals = randomBetween(40, 80);
        assists = randomBetween(20, 50);
        cleanSheets = randomBetween(150, 220);
      } else if (ovr >= 75) {
        goals = randomBetween(25, 55);
        assists = randomBetween(15, 35);
        cleanSheets = randomBetween(100, 160);
      } else if (ovr >= 65) {
        goals = randomBetween(15, 40);
        assists = randomBetween(10, 25);
        cleanSheets = randomBetween(60, 110);
      } else {
        goals = randomBetween(8, 25);
        assists = randomBetween(5, 15);
        cleanSheets = randomBetween(35, 70);
      }
    } else {
      // Default for any other position
      goals = randomBetween(50, 150);
      assists = randomBetween(40, 120);
      cleanSheets = 0;
    }

    // Trophies based on OVR and League Tier
    const tier = predictions.predicted_league_tier;
    let leagueWins, championsLeagueWins, worldCupWins, ballonDors;

    if (ovr >= 90 && tier === 'Top Tier') {
      leagueWins = randomBetween(8, 15);
      championsLeagueWins = randomBetween(3, 6);
      worldCupWins = randomBetween(1, 2);
      ballonDors = randomBetween(2, 5);
    } else if (ovr >= 85 && tier === 'Top Tier') {
      leagueWins = randomBetween(5, 10);
      championsLeagueWins = randomBetween(2, 4);
      worldCupWins = randomBetween(0, 1);
      ballonDors = randomBetween(0, 2);
    } else if (ovr >= 80) {
      leagueWins = randomBetween(3, 7);
      championsLeagueWins = randomBetween(1, 3);
      worldCupWins = randomBetween(0, 1);
      ballonDors = randomBetween(0, 1);
    } else if (ovr >= 75) {
      leagueWins = randomBetween(2, 5);
      championsLeagueWins = randomBetween(0, 2);
      worldCupWins = 0;
      ballonDors = 0;
    } else if (ovr >= 70) {
      leagueWins = randomBetween(1, 3);
      championsLeagueWins = randomBetween(0, 1);
      worldCupWins = 0;
      ballonDors = 0;
    } else {
      leagueWins = randomBetween(0, 2);
      championsLeagueWins = 0;
      worldCupWins = 0;
      ballonDors = 0;
    }

    return {
      careerYears,
      totalMatches,
      goals,
      assists,
      cleanSheets: position === 'GK' || position === 'Center-back' || position === 'Full-back' ? cleanSheets : null,
      leagueWins,
      championsLeagueWins,
      worldCupWins,
      ballonDors
    };
  };

  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handlePredictCareer = () => {
    setAnimating(true);
    setTimeout(() => {
      const stats = calculateCareerPrediction();
      setCareerStats(stats);
      setShowCareer(true);
      setAnimating(false);
    }, 2000);
  };

  const CounterAnimation = ({ endValue, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!showCareer) return;
      
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * endValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [showCareer, endValue, duration]);

    return (
      <span className="counter-value">
        {prefix}{count}{suffix}
      </span>
    );
  };

  if (!showCareer && !animating) {
    return (
      <div className="career-prediction-trigger">
        <button className="predict-career-btn" onClick={handlePredictCareer}>
          <Zap size={24} />
          PREDICT CAREER TRAJECTORY
          <div className="btn-lightning"></div>
        </button>
        <p className="career-trigger-subtitle">
          AI-powered lifetime achievement forecast based on current attributes
        </p>
      </div>
    );
  }

  if (animating) {
    return (
      <div className="career-loading">
        <div className="loading-orb">
          <div className="orb-inner"></div>
          <div className="orb-ring ring-1"></div>
          <div className="orb-ring ring-2"></div>
          <div className="orb-ring ring-3"></div>
        </div>
        <h3 className="loading-text">CALCULATING CAREER TRAJECTORY...</h3>
        <div className="loading-bars">
          <div className="bar" style={{ animationDelay: '0s' }}></div>
          <div className="bar" style={{ animationDelay: '0.1s' }}></div>
          <div className="bar" style={{ animationDelay: '0.2s' }}></div>
          <div className="bar" style={{ animationDelay: '0.3s' }}></div>
          <div className="bar" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="career-prediction-container">
      <div className="career-header">
        <div className="header-icon">
          <Calendar size={50} />
        </div>
        <h2 className="career-title">CAREER PROJECTION</h2>
        <p className="career-subtitle">AI-generated lifetime statistics and achievements</p>
      </div>

      {/* Career Overview */}
      <div className="career-overview">
        <div className="overview-card">
          <Calendar className="overview-icon" size={40} />
          <div className="overview-label">CAREER SPAN</div>
          <div className="overview-value">
            <CounterAnimation endValue={careerStats.careerYears} suffix=" Years" />
          </div>
        </div>

        <div className="overview-card">
          <Users className="overview-icon" size={40} />
          <div className="overview-label">TOTAL MATCHES</div>
          <div className="overview-value">
            <CounterAnimation endValue={careerStats.totalMatches} />
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="performance-section">
        <h3 className="section-title">
          <TrendingUp size={28} />
          PERFORMANCE STATISTICS
        </h3>
        
        <div className="stats-grid-career">
          <div className="stat-card-career goals-card">
            <div className="stat-icon-wrapper">
              <Target size={36} />
            </div>
            <div className="stat-label">GOALS</div>
            <div className="stat-value-career">
              <CounterAnimation endValue={careerStats.goals} />
            </div>
            <div className="stat-bar-career">
              <div className="stat-fill goals-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="stat-card-career assists-card">
            <div className="stat-icon-wrapper">
              <Users size={36} />
            </div>
            <div className="stat-label">ASSISTS</div>
            <div className="stat-value-career">
              <CounterAnimation endValue={careerStats.assists} />
            </div>
            <div className="stat-bar-career">
              <div className="stat-fill assists-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          {careerStats.cleanSheets !== null && (
            <div className="stat-card-career cleansheets-card">
              <div className="stat-icon-wrapper">
                <Award size={36} />
              </div>
              <div className="stat-label">CLEAN SHEETS</div>
              <div className="stat-value-career">
                <CounterAnimation endValue={careerStats.cleanSheets} />
              </div>
              <div className="stat-bar-career">
                <div className="stat-fill cleansheets-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trophies Section */}
      <div className="trophies-section">
        <h3 className="section-title">
          <Trophy size={28} />
          TROPHY CABINET
        </h3>

        <div className="trophies-grid">
          <div className="trophy-card ballon">
            <div className="trophy-icon">
              <Star size={50} />
            </div>
            <div className="trophy-count">
              <CounterAnimation endValue={careerStats.ballonDors} />
            </div>
            <div className="trophy-label">Ballon d'Or</div>
            <div className="trophy-rarity">
              {careerStats.ballonDors >= 3 ? 'LEGENDARY' : 
               careerStats.ballonDors >= 1 ? 'ELITE' : 'N/A'}
            </div>
          </div>

          <div className="trophy-card league">
            <div className="trophy-icon">
              <Trophy size={50} />
            </div>
            <div className="trophy-count">
              <CounterAnimation endValue={careerStats.leagueWins} />
            </div>
            <div className="trophy-label">League Titles</div>
            <div className="trophy-rarity">
              {careerStats.leagueWins >= 8 ? 'LEGENDARY' : 
               careerStats.leagueWins >= 5 ? 'ELITE' : 
               careerStats.leagueWins >= 2 ? 'GOOD' : 'AVERAGE'}
            </div>
          </div>

          <div className="trophy-card ucl">
            <div className="trophy-icon">
              <Award size={50} />
            </div>
            <div className="trophy-count">
              <CounterAnimation endValue={careerStats.championsLeagueWins} />
            </div>
            <div className="trophy-label">Champions League</div>
            <div className="trophy-rarity">
              {careerStats.championsLeagueWins >= 3 ? 'LEGENDARY' : 
               careerStats.championsLeagueWins >= 2 ? 'ELITE' : 
               careerStats.championsLeagueWins >= 1 ? 'GOOD' : 'N/A'}
            </div>
          </div>

          <div className="trophy-card worldcup">
            <div className="trophy-icon">
              <Trophy size={50} />
            </div>
            <div className="trophy-count">
              <CounterAnimation endValue={careerStats.worldCupWins} />
            </div>
            <div className="trophy-label">World Cup</div>
            <div className="trophy-rarity">
              {careerStats.worldCupWins >= 2 ? 'LEGENDARY' : 
               careerStats.worldCupWins >= 1 ? 'ELITE' : 'N/A'}
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Rating */}
      <div className="legacy-section">
        <h3 className="legacy-title">LEGACY RATING</h3>
        <div className="legacy-bar">
          <div className="legacy-fill" style={{
            width: `${Math.min(100, (careerStats.ballonDors * 15 + careerStats.leagueWins * 5 + 
                    careerStats.championsLeagueWins * 10 + careerStats.worldCupWins * 20))}%`
          }}></div>
        </div>
        <p className="legacy-text">
          {predictions.predicted_ovr >= 90 ? '🌟 ALL-TIME GREAT - Generational Talent' :
           predictions.predicted_ovr >= 85 ? '⭐ WORLD CLASS - Elite Player' :
           predictions.predicted_ovr >= 80 ? '✨ TOP PLAYER - Consistent Performer' :
           predictions.predicted_ovr >= 75 ? '💫 SOLID PLAYER - Reliable Professional' :
           '⚽ PROFESSIONAL - Decent Career'}
        </p>
      </div>
    </div>
  );
};

export default CareerPrediction;