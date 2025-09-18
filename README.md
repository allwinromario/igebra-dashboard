# Student Cognitive Skills Analysis Dashboard

A comprehensive data science project that analyzes student cognitive skills and provides interactive visualizations through a modern web dashboard. This project demonstrates the complete pipeline from data generation to machine learning insights and web deployment.

## 🌟 Live Demo

**Dashboard**: [https://igebradashboard.vercel.app](https://igebradashboard.vercel.app)  
**Repository**: [https://github.com/allwinromario/igebra-dashboard](https://github.com/allwinromario/igebra-dashboard)

## 📊 Project Overview

This project analyzes student cognitive performance across five key dimensions:
- **Comprehension** - Understanding and interpreting information
- **Attention** - Ability to focus and concentrate
- **Focus** - Sustained attention to specific tasks
- **Retention** - Memory and recall capabilities
- **Engagement** - Time spent actively learning

## 🎯 Key Features

### Data Analysis & Machine Learning
- **Synthetic Dataset**: 1000 student records with realistic cognitive metrics
- **Correlation Analysis**: Statistical relationships between cognitive skills and performance
- **Predictive Modeling**: Linear regression model with 63% accuracy (R² = 0.63)
- **Student Clustering**: K-means clustering identifying 4 distinct learning personas
- **Performance Insights**: Data-driven recommendations for educational improvement

### Interactive Dashboard
- **Real-time Metrics**: Live performance indicators and averages
- **Interactive Charts**: Bar and radar charts for skills visualization
- **Student Data Table**: Searchable, paginated student records
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🔬 Analysis Results

### Correlation with Assessment Scores
- **Comprehension**: 0.477 (strongest predictor)
- **Attention**: 0.405
- **Retention**: 0.403
- **Focus**: 0.224
- **Engagement Time**: 0.181

### Machine Learning Model Performance
- **Algorithm**: Linear Regression
- **R² Score**: 0.63 (63% variance explained)
- **Mean Squared Error**: 27.30
- **Cross-validation**: Robust performance across test sets

### Learning Personas (K-means Clustering)

#### Cluster 0: "Attentive Strugglers" (276 students)
- **Profile**: Low comprehension but high attention and focus
- **Characteristics**: Comprehension 57.9%, Attention 77.8%, Focus 77.2%
- **Average Score**: 67.8%
- **Recommendation**: Focus on comprehension-building exercises

#### Cluster 1: "Focused but Forgetful" (230 students)
- **Profile**: Good comprehension and focus but poor retention
- **Characteristics**: Comprehension 74.1%, Focus 79.0%, Retention 47.0%
- **Average Score**: 66.9%
- **Recommendation**: Implement memory enhancement techniques

#### Cluster 2: "Independent Learners" (265 students)
- **Profile**: High comprehension and retention, lower attention needs
- **Characteristics**: Comprehension 76.0%, Retention 76.9%, Attention 50.2%
- **Average Score**: 69.6% (highest performing group)
- **Recommendation**: Provide advanced self-paced learning materials

#### Cluster 3: "Balanced but Disengaged" (229 students)
- **Profile**: Moderate skills but lowest engagement time
- **Characteristics**: Balanced skills, Engagement 37.7 min (lowest)
- **Average Score**: 65.1%
- **Recommendation**: Increase engagement through interactive content

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS for responsive design
- **UI Components**: Tremor for data visualization components
- **Charts**: Chart.js with React integration
- **Icons**: Heroicons for consistent iconography

### Data Analysis
- **Language**: Python 3.11
- **Data Processing**: Pandas, NumPy
- **Machine Learning**: Scikit-learn
- **Visualization**: Matplotlib, Seaborn
- **Environment**: Jupyter Notebook

### Deployment & DevOps
- **Hosting**: Vercel with automatic deployments
- **Version Control**: Git with comprehensive commit history
- **CI/CD**: GitHub integration with Vercel
- **Environment**: Virtual environments for Python dependencies

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/allwinromario/igebra-dashboard.git
cd igebra-dashboard
```

2. **Set up Python environment:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. **Install Node.js dependencies:**
```bash
cd dashboard
npm install
```

### Running the Project

#### Data Analysis (Jupyter Notebook)
```bash
# Activate Python environment
source venv/bin/activate

# Launch Jupyter Notebook
jupyter notebook

# Open analysis/student_analysis.ipynb
# Run all cells to generate data and perform analysis
```

#### Dashboard Development
```bash
# Navigate to dashboard directory
cd dashboard

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

#### Production Deployment
The project is automatically deployed to Vercel on every push to the main branch.

## 📁 Project Structure

```
igebra/
├── analysis/                   # Data analysis and ML
│   └── student_analysis.ipynb  # Complete analysis notebook
├── data/                       # Generated datasets
│   ├── student_data.csv       # Raw student data (1000 records)
│   └── processed_student_data.csv  # Data with cluster assignments
├── dashboard/                  # Next.js frontend application
│   ├── src/
│   │   └── app/
│   │       ├── components/    # React components
│   │       │   ├── OverviewStats.tsx
│   │       │   ├── SkillsChart.tsx
│   │       │   ├── StudentTable.tsx
│   │       │   └── InsightsSection.tsx
│   │       ├── globals.css   # Global styles
│   │       ├── layout.tsx    # App layout
│   │       └── page.tsx      # Home page
│   ├── package.json          # Node.js dependencies
│   ├── tailwind.config.js    # TailwindCSS configuration
│   └── next.config.js        # Next.js configuration
├── venv/                      # Python virtual environment
├── requirements.txt           # Python dependencies
├── vercel.json               # Vercel deployment config
└── README.md                 # Project documentation
```

## 📈 Data Schema

### Student Records
```typescript
interface Student {
  student_id: string;          // Unique identifier
  name: string;               // Student name
  class: string;              // Class section (A, B, C, D)
  comprehension: number;      // Score 0-100
  attention: number;          // Score 0-100
  focus: number;              // Score 0-100
  retention: number;          // Score 0-100
  engagement_time: number;    // Minutes spent learning
  assessment_score: number;   // Overall performance score
  cluster?: number;           // Learning persona (0-3)
}
```

## 🎨 Dashboard Features

### Metrics Overview
- Real-time calculation of average scores across all cognitive dimensions
- Responsive card layout with hover effects
- Color-coded performance indicators

### Interactive Charts
- **Bar Chart**: Comparative view of all cognitive skills
- **Radar Chart**: Holistic performance visualization
- **Tab Interface**: Easy switching between chart types

### Student Data Table
- **Search Functionality**: Filter by ID, name, or class
- **Pagination**: Navigate through large datasets efficiently
- **Responsive Design**: Horizontal scrolling on mobile devices
- **Performance Color Coding**: Visual indicators for score ranges

### Key Insights
- Automated analysis summary
- Actionable recommendations
- Statistical findings presentation

## 🔧 Development

### Adding New Features
1. For dashboard components: Add to `dashboard/src/app/components/`
2. For data analysis: Extend `analysis/student_analysis.ipynb`
3. Update this README with new functionality

### Customization
- **Styling**: Modify `dashboard/tailwind.config.js` for theme changes
- **Data**: Update data generation parameters in the Jupyter notebook
- **Components**: Extend React components in the components directory

## 📝 Future Enhancements

- [ ] Real-time data integration with educational platforms
- [ ] Advanced ML models (Random Forest, Neural Networks)
- [ ] Teacher dashboard with class management features
- [ ] Student progress tracking over time
- [ ] Export functionality for reports
- [ ] Multi-language support
- [ ] Dark mode theme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Allwin Romario**
- GitHub: [@allwinromario](https://github.com/allwinromario)
- Project Link: [https://github.com/allwinromario/igebra-dashboard](https://github.com/allwinromario/igebra-dashboard)

---

*This project demonstrates a complete data science workflow from data generation through machine learning analysis to web deployment, showcasing skills in Python, React, TypeScript, and modern web development practices.*
