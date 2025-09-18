# Cognitive Skills & Student Performance Dashboard

This project analyzes student cognitive skills and their correlation with academic performance, featuring a machine learning model for performance prediction and an interactive dashboard.

## Project Structure
```
.
├── analysis/           # Jupyter notebooks for data analysis and ML
├── data/              # Data files
├── dashboard/         # Next.js dashboard application
└── requirements.txt   # Python dependencies
```

## Setup Instructions

### Python Environment Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Dashboard Setup
1. Navigate to the dashboard directory:
   ```bash
   cd dashboard
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Features
- Synthetic student dataset analysis
- Correlation analysis between cognitive skills and performance
- ML model for assessment score prediction
- Student clustering into learning personas
- Interactive dashboard with:
  - Overview statistics
  - Various visualization charts
  - Searchable/sortable student table
  - Key insights section

## Tech Stack
- Python (Data Analysis & ML)
- Next.js (Dashboard)
- Pandas, Scikit-learn (Data Processing & ML)
- Chart.js/D3.js (Visualizations)
