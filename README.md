This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the packages:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The application has been built using TypeScript, React (Next.js v15), Recharts and Context API.

Custom reusable components are used under @/components/shared directory. It is a personal library written by me using React and Tailwind CSS.

The flow is the following:

- on the homepage we have a search field for finding the company of interest
- after clicking on the field, a predefined (pre-fetched) list of companies is shown on the screen
- when start typing in the field, the list will be filtered so we can see only the desired companies
- after selecting the best result, the screen will be populated with pre-fetched data, simulating access to a real API
- we can see the ESG results for the current year (in our case 2024)
- from a dropdown/select menu we can choose another year
- after changing the year, the results should be updated according to the selected period
- in the bottom of the page, there is a timestamp of the date when data has been loaded

Enjoy :)
