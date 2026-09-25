# Appliance Energy Consumption Website

## Project Overview

This project is an interactive website developed for COS30045 Data Visualisation.

The website explores television energy consumption data for television models currently available in the Australian market. It demonstrates the use of HTML, CSS and JavaScript while also presenting data visualisations created from data processed using KNIME.

## Website Features

The website contains three sections:

### Home
Provides an introduction to appliance energy consumption and explains why energy efficiency is important.

### Televisions
Presents a data story about televisions currently available in Australia. The visualisations explore screen technologies, screen sizes, television brands, power consumption and energy star ratings.

### About Us
Provides information about the purpose of the project and the technologies used to develop the website.

## Data Story

### Intended Audience

The intended audience is Australian consumers who are comparing televisions and want to better understand the television options available in the market and their energy use.

Consumers may be interested in factors such as screen size, brand, screen technology and electricity consumption when choosing a television.

### Story Structure

The visualisation story begins by showing what television technologies are currently available in Australia.

It then explores the most common screen sizes and the brands that have the greatest number of television models.

The story then focuses on energy consumption by comparing the power use of different screen technologies and examining the relationship between television screen size and power consumption.

Finally, the relationship between screen size and energy star rating is explored.

This order was chosen so that the audience first understands the television market before moving into energy-related comparisons that may help inform purchasing decisions.

## About the Data

### Data Source

The television dataset was obtained from the Australian Government data portal, data.gov.au.

The dataset contains information about energy-labelled television products available in the Australian market.

### Data Processing

The dataset was processed using KNIME Analytics Platform.

The data preparation process included:

- reviewing the dataset and its columns
- removing unnecessary columns
- checking for missing values
- identifying duplicate television models
- keeping the most recent submission for duplicate models
- filtering the dataset to include currently available television models
- standardising brand names
- converting screen size from centimetres to inches
- grouping and aggregating data where required for visualisation

The cleaned dataset was then used to create the charts presented on the website.

### Privacy

The dataset contains information about television products rather than personal information about individuals.

Therefore, the visualisations do not use personally identifiable information.

### Accuracy and Limitations

The visualisations are based on the information contained in the Australian Government dataset.

The results depend on the accuracy and completeness of the original data. Product availability may also change over time as television models enter or leave the Australian market.

Some categories contain substantially more television models than others, so comparisons between categories should be interpreted carefully.

The visualisations show relationships within the dataset but do not necessarily demonstrate that one variable causes another.

### Ethics

The visualisations were designed to represent the data accurately and avoid misleading comparisons.

Charts were selected according to the type of data being presented, and labels and supporting explanations were included to help users understand the findings.

The purpose of the visualisations is to help users understand television energy consumption rather than encourage the purchase of a particular brand or product.

## Technologies Used

- **HTML**  
  Used to create the structure and content of the website.

- **CSS**  
  Used to control the layout, colours and visual styling.

- **JavaScript**  
  Used to create interactive navigation between the website sections.

- **KNIME Analytics Platform**  
  Used to clean, transform, aggregate and explore the television dataset.

- **GitHub**  
  Used for version control and storage of the project files.

- **Vercel**  
  Used to deploy and host the website.

## AI Declaration

Generative AI tools, including GitHub Copilot, were used to assist with the development of this project.

GitHub Copilot helped suggest HTML, CSS and JavaScript code and assisted with debugging. Generative AI was also used to help explain code and assist with the wording and structure of some project documentation.

All generated suggestions were reviewed and edited where necessary. I ensured that I understood the code used in the final project and could explain how the HTML, CSS and JavaScript components work.

## Reflection

Through this task, I improved my understanding of how HTML, CSS and JavaScript work together to create an interactive website.

I also gained experience using GitHub for version control and Vercel for website deployment.

Using KNIME helped me understand how real-world datasets need to be cleaned, transformed and aggregated before they can be visualised.

The data storytelling exercise also helped me understand that charts should not simply display data. They should be organised and supported with text so that an audience can understand the main findings and follow a clear story.