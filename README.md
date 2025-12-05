# ⚽ Football Player AI Predictor

<div align="center">
  
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg?logo=react)
![Node](https://img.shields.io/badge/Node.js-16.0+-339933.svg?logo=node.js)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB.svg?logo=python)
![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-F37626.svg?logo=jupyter&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**Next-Generation AI-Powered Football Player Analytics Platform**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Technology](#-technology-stack) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

**Football Player AI Predictor** is a cutting-edge web application that leverages machine learning to analyze and predict football player statistics, career trajectories, and performance metrics. Built with a futuristic UI and powered by advanced ML models, it provides comprehensive player analysis including overall ratings, optimal positions, league tiers, similar player matching, and complete career trajectory forecasts.

### 🎯 What Makes It Special?

- **AI-Powered Predictions**: XGBoost and scikit-learn models trained on real player data
- **Position-Aware Analysis**: Different prediction logic for Strikers, Midfielders, Defenders, and Goalkeepers
- **Career Trajectory Forecasting**: Predict entire careers including goals, assists, trophies, and Ballon d'Or awards
- **Player DNA Matching**: Find statistically similar players using Euclidean distance algorithms
- **Futuristic UI**: Cyberpunk-inspired design with neon effects, animations, and glassmorphism
- **Real-Time Feedback**: Interactive sliders with color-coded ratings and progress bars

---

## ✨ Features

### 🎮 Core Features

#### 1. **Overall Rating (OVR) Prediction**
- Neural network-powered rating calculation (1-99 scale)
- Based on 35+ individual attributes
- Uses XGBoost regression model
- Trained on thousands of real player profiles

#### 2. **Position Analysis**
- Predicts optimal playing position:
  - **Striker**: High finishing, positioning, shot power
  - **Winger**: Dribbling, pace, crossing
  - **Midfielder**: Passing, vision, stamina
  - **Full-back**: Pace, tackling, stamina
  - **Center-back**: Defending, strength, heading
  - **Goalkeeper**: GK-specific attributes
- Weighted scoring system per position
- XGBoost classification model

#### 3. **League Tier Classification**
- Predicts competitive level:
  - **Top Tier** (85+ OVR): Elite leagues
  - **Mid Tier** (72-85 OVR): Professional leagues
  - **Lower Tier** (<72 OVR): Amateur/semi-pro
- Hybrid ML + rule-based approach

#### 4. **Player DNA Matching**
- Finds top 5 statistically similar players
- Uses Euclidean distance in 35D attribute space
- Shows match percentage
- Includes real player names and ratings

#### 5. **Career Trajectory Prediction** 🆕
Predicts entire career including:
- **Career Duration**: Total years (8-20) and matches (200-1000+)
- **Performance Stats**: 
  - Goals (position-based: 0-500+)
  - Assists (0-280+)
  - Clean sheets (defenders/GK only)
- **Trophy Cabinet**:
  - League titles (0-15)
  - Champions League wins (0-6)
  - World Cup victories (0-2)
  - Ballon d'Or awards (0-5)
- **Legacy Rating**: Overall career achievement score

### 🎨 UI/UX Features

- **Landing Page**: Animated football field, stadium lights, floating footballs
- **Selection Page**: Hexagon pattern background, 3D card rotations
- **Form Page**: Digital rain effect, categorized attributes, custom sliders
- **Results Page**: Scan lines overlay, animated counters, player avatars
- **Career Page**: Floating orb loading, trophy animations, rainbow progress bars

### 🔧 Technical Features

- **Component-Based Architecture**: Modular React design
- **Real-Time Validation**: Input constraints (1-99)
- **Auto-Initialization**: All attributes default to 30
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: CSS animations, lazy loading
- **Error Handling**: Comprehensive try-catch blocks
- **Type Safety**: PropTypes validation

---

## 🎬 Demo

### Landing Page
<img width="1828" height="1025" alt="image" src="https://github.com/user-attachments/assets/1a2481c9-2f5f-4c27-9e85-c6e007cb0c6d" />


### Player Selection
<img width="1826" height="1025" alt="image" src="https://github.com/user-attachments/assets/bfa62ec7-dd73-406b-8263-7d65adc56516" />


### Attribute Configuration
<img width="1819" height="1029" alt="image" src="https://github.com/user-attachments/assets/7b7c7583-afd1-4eb3-aaff-b91d20d798ec" />



### Results Dashboard
<img width="1828" height="994" alt="image" src="https://github.com/user-attachments/assets/64b9d233-5613-4135-b8dd-fd1827c3e68d" />
<img width="1749" height="1023" alt="image" src="https://github.com/user-attachments/assets/aa5bbc38-1450-4c5b-ba88-818f61f807b7" />


### Career Trajectory
<img width="1832" height="1025" alt="image" src="https://github.com/user-attachments/assets/a0267e7f-ee55-4684-90cb-be35f4f9937e" />
<img width="1824" height="930" alt="image" src="https://github.com/user-attachments/assets/9a647776-4cb2-428e-b0da-a234162a09b0" />


---

## 🚀 Installation

### Prerequisites

- **Node.js** 16.0+ 
- **Python** 3.8+
- **npm** or **yarn**
- **Git**

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/football-ai-predictor.git
cd football-ai-predictor

# Navigate to backend
cd backend

# Install dependencies
npm install

# Install Python dependencies
pip install pandas numpy scikit-learn joblib xgboost

# Place your trained models in backend/models/
# Models can be obtained by running the Jupyter notebook files in the `models` folder using the [dataset here](https://www.kaggle.com/datasets/nyagami/ea-sports-fc-25-database-ratings-and-stats).

# For more detailed information, please check out my other project [here](https://github.com/muahmad232/FC-25-Player-Analytics-and-Prediction-System).
# Required files:
# - best_xgb_regr_oerall.pkl
# - ovr_feature_scaler.pkl
# - best_xgb_model.pkl
# - position_feature_scaler.pkl
# - position_label_encoder.pkl
# - league_tier_model.pkl
# - league_tier_encoder.pkl
# - similarity_scaler.pkl
# - scaled_attributes.npy
# - player_info.csv
# - gk_ovr_model.pkl
# - gk_similarity_scaler.pkl
# - scaled_gk_attributes.npy
# - gk_player_info.csv

# Start backend server
node server.js
# Server runs on http://localhost:5001
```

### Frontend Setup

```bash
# Open new terminal
cd football-ai-predictor

# Create React app (if not already created)
npx create-react-app frontend
cd frontend

# Install dependencies
npm install lucide-react

# Create folder structure
mkdir -p src/components src/pages src/styles src/data

# Copy all component files to respective folders
# (See project structure below)

# Start frontend
npm start
# App opens at http://localhost:3000
```

---

## 📁 Project Structure

```
football-ai-predictor/
│
├── backend/
│   ├── controllers/
│   │   └── predictController.js      # API request handlers
│   ├── routes/
│   │   └── predictRoutes.js          # API routes
│   ├── scripts/
│   │   ├── predict_outfield.py       # Outfield player ML script
│   │   └── predict_gk.py             # Goalkeeper ML script
│   ├── models/                        # Trained ML models (*.pkl, *.npy, *.csv)
│   ├── server.js                      # Express server
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── AttributeCategory.jsx  # Attribute slider component
    │   │   ├── CareerPrediction.jsx   # Career trajectory component
    │   │   └── ResultsDisplay.jsx     # Results visualization
    │   ├── pages/
    │   │   ├── LandingPage.jsx        # Home page
    │   │   ├── SelectionPage.jsx      # Player type selection
    │   │   └── FormPage.jsx           # Attribute form
    │   ├── styles/
    │   │   ├── globalStyles.css       # Global styles
    │   │   ├── landing.css            # Landing page styles
    │   │   ├── selection.css          # Selection page styles
    │   │   ├── form.css               # Form page styles
    │   │   ├── attributeCategory.css  # Attribute styles
    │   │   ├── results.css            # Results styles
    │   │   └── careerPrediction.css   # Career styles
    │   ├── data/
    │   │   └── attributes.js          # Attribute definitions
    │   ├── App.jsx                    # Main app component
    │   └── index.js                   # React entry point
    ├── package.json
    └── README.md
```

---

## 🎮 Usage

### 1. **Launch Application**
```bash
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend
cd frontend
npm start
```

### 2. **Navigate Through Pages**

#### **Landing Page**
- View feature overview
- Read about career trajectory
- Click "START ANALYSIS"

#### **Selection Page**
- Choose "Outfield Player" or "Goalkeeper"
- Cards have hover 3D effects

#### **Form Page**
- Adjust 35+ attribute sliders (all start at 30)
- See real-time color-coded feedback:
  - 🔴 Red (1-59): Average
  - 🟡 Yellow (60-79): Good
  - 🟢 Green (80-99): Excellent
- Click "GENERATE PREDICTION"

#### **Results Page**
- View OVR, Position, and League Tier
- See top 5 similar players
- Click "PREDICT CAREER TRAJECTORY"

#### **Career Page**
- Watch 2-second loading animation
- See animated counters fill up
- View trophy cabinet
- Check legacy rating

### 3. **Start New Analysis**
- Click "NEW ANALYSIS" button
- Returns to landing page

---

## 🛠️ Technology Stack

### Frontend
- **React** 18.0+ - UI framework
- **Lucide React** - Icon library
- **CSS3** - Styling with animations
- **JavaScript ES6+** - Modern syntax

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin requests
- **Child Process** - Python script execution

### Machine Learning
- **Python** 3.8+ - ML runtime
- **XGBoost** - Gradient boosting models
- **scikit-learn** - ML algorithms & preprocessing
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **Joblib** - Model serialization

### Design
- **Google Fonts** - Orbitron, Rajdhani
- **CSS Animations** - Keyframes, transitions
- **Glassmorphism** - Backdrop blur effects
- **Gradients** - Multi-color backgrounds

---

## 🧠 ML Model Details

### Training Data
- **Dataset Size**: 10,000+ players
- **Features**: 35 attributes per player
- **Sources**: FIFA, real player statistics

### Models

#### 1. **OVR Prediction Model**
- **Algorithm**: XGBoost Regressor
- **Features**: 35 attributes + 6 face stats
- **Preprocessing**: StandardScaler normalization
- **Performance**: R² > 0.95

#### 2. **Position Classification Model**
- **Algorithm**: XGBoost Classifier
- **Features**: 5 position-weighted scores
- **Classes**: Striker, Winger, Midfielder, Full-back, Center-back
- **Preprocessing**: StandardScaler + LabelEncoder
- **Performance**: Accuracy > 90%

#### 3. **League Tier Model**
- **Algorithm**: Hybrid (Rules + XGBoost)
- **Rules**: OVR >= 86 → Top Tier, OVR < 72 → Lower Tier
- **ML Range**: 72-85 OVR uses XGBoost
- **Features**: OVR + 6 face stats
- **Classes**: Top Tier, Mid Tier, Lower Tier

#### 4. **Similarity Algorithm**
- **Method**: Euclidean Distance
- **Space**: 35-dimensional attribute space
- **Preprocessing**: StandardScaler normalization
- **Output**: Top 5 nearest neighbors

### Career Prediction Logic
- **Rule-Based System**: No ML model required
- **Input**: OVR, Position, Attributes, League Tier
- **Logic**: 
  - Career years based on OVR (85+ = 15-20 years)
  - Matches/season based on OVR + Stamina
  - Goals based on Position + OVR + Finishing
  - Assists based on Position + OVR + Passing
  - Trophies based on OVR + League Tier
- **Randomization**: Range-based random selection for variety

---

## 🎨 Design Philosophy

### Color Palette

#### Primary Theme (ML Features)
- **Neon Green**: `#00ff88` - Success, AI, tech
- **Cyan**: `#00d4ff` - Secondary highlights
- **Deep Purple**: `#0a0e27` - Background
- **Gold**: `#ffd700` - Trophies, excellence

#### Career Theme
- **Red**: `#ff6b6b` - Energy, achievement
- **Pink**: `#ee5a6f` - Secondary career color

#### Ratings
- **Green**: 80-99 (Excellent)
- **Yellow**: 60-79 (Good)
- **Red**: 1-59 (Average)

### Typography
- **Headers**: Orbitron (Futuristic, bold)
- **Body**: Rajdhani (Modern, readable)
- **Monospace**: Courier New (Digital rain)

### Animation Principles
- **Duration**: 0.3-0.5s for interactions
- **Easing**: ease-in-out for smooth motion
- **Keyframes**: Used for continuous animations
- **Transform**: Preferred over position changes
- **Will-change**: Applied for performance

---

## 📊 Prediction Ranges

### Career Duration
| OVR Range | Years | Matches/Season |
|-----------|-------|----------------|
| 85+       | 15-20 | 45-55          |
| 75-84     | 12-16 | 38-48          |
| 65-74     | 10-14 | 30-42          |
| <65       | 8-12  | 25-38          |

### Goals (Elite Players)
| Position    | OVR 85+ Goals |
|-------------|---------------|
| Striker     | 350-500       |
| Winger      | 180-300       |
| Midfielder  | 100-180       |
| Full-back   | 30-60         |
| Center-back | 40-80         |
| Goalkeeper  | 0-5           |

### Trophies (Top Tier)
| OVR   | League | UCL | World Cup | Ballon d'Or |
|-------|--------|-----|-----------|-------------|
| 90+   | 8-15   | 3-6 | 1-2       | 2-5         |
| 85-89 | 5-10   | 2-4 | 0-1       | 0-2         |
| 80-84 | 3-7    | 1-3 | 0-1       | 0-1         |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Workflow

```bash
# Fork the repository
# Clone your fork
git clone https://github.com/muahmad232/football-ai-predictor.git

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git commit -m "Add amazing feature"

# Push to branch
git push origin feature/amazing-feature

# Open Pull Request
```

### Code Style
- **JavaScript**: ESLint + Prettier
- **Python**: PEP 8
- **CSS**: BEM methodology
- **Comments**: JSDoc for functions

### Testing
```bash
# Frontend tests
npm test

# Backend tests
npm run test:backend

# Python tests
pytest scripts/
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **Backend won't start**
```bash
# Check Node version
node --version  # Should be 16+

# Check port 5001
lsof -i :5001  # Kill if occupied

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 2. **Frontend CORS errors**
```javascript
// Ensure backend has CORS enabled
app.use(cors());
```

#### 3. **Python script errors**
```bash
# Verify Python version
python --version  # Should be 3.8+

# Reinstall packages
pip install --upgrade pandas numpy scikit-learn joblib xgboost
```

#### 4. **Models not loading**
```bash
# Check models directory
ls backend/models/

# Verify file names match exactly
# Case-sensitive on Linux/Mac!
```

#### 5. **Sliders not working**
```css
/* Ensure CSS is imported */
import '../styles/attributeCategory.css';
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Football AI Predictor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👏 Acknowledgments

- **Dataset**: FIFA player statistics
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Orbitron, Rajdhani)
- **ML Libraries**: scikit-learn, XGBoost teams
- **Inspiration**: Modern football analytics platforms

---

## 📧 Contact

**Project Maintainer**: Muhammad Ahmad
- 📧 Email: ahmadnaul.495@gmail.com- 🐙 GitHub: [@muahmad232](https://github.com/muahmad232)
- 🔗 LinkedIn: [Muhammad Ahmad](https://www.linkedin.com/in/muhammad-ahmad-517324372)

**Project Link**: [https://github.com/muahmad232/football-ai-predictor](https://github.com/muahmad232/football-ai-predictor)

---


### ⭐ Star this repository if you found it helpful!

**Made with ❤️ and ⚽ by passionate developers**

[Report Bug](https://github.com/muahmad232/football-ai-predictor/issues) • [Request Feature](https://github.com/muahmad232/football-ai-predictor/issues)

</div>

---

**Version**: 1.0.0  
**Last Updated**: December 2025  

🚀 **Ready to predict the future of football? Let's get started!** ⚽
