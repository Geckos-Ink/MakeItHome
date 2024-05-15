import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

/* tslint:disable:max-line-length */
export const finance = {
    accountBalance    : {
        growRate: 38.33,
        ami     : 45332,
        series  : [
            {
                name: 'Predicted',
                data: [
                    {
                        x: now.minus({months: 12}).plus({day: 1}).toJSDate(),
                        y: 48.84,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 4}).toJSDate(),
                        y: 53.51,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 7}).toJSDate(),
                        y: 52.93,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 10}).toJSDate(),
                        y: 49.08,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 13}).toJSDate(),
                        y: 50.27,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 16}).toJSDate(),
                        y: 48.37,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 19}).toJSDate(),
                        y: 44.84,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 22}).toJSDate(),
                        y: 40.71,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 25}).toJSDate(),
                        y: 41.24,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 28}).toJSDate(),
                        y: 45.63,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 1}).toJSDate(),
                        y: 38.20,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 4}).toJSDate(),
                        y: 39.68,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 7}).toJSDate(),
                        y: 41.02,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 10}).toJSDate(),
                        y: 39.41,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 13}).toJSDate(),
                        y: 35.66,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 16}).toJSDate(),
                        y: 38.53,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 19}).toJSDate(),
                        y: 38.53,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 22}).toJSDate(),
                        y: 40.69,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 25}).toJSDate(),
                        y: 38.79,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 28}).toJSDate(),
                        y: 42.98,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 1}).toJSDate(),
                        y: 43.55,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 4}).toJSDate(),
                        y: 40.65,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 7}).toJSDate(),
                        y: 36.50,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 10}).toJSDate(),
                        y: 33.79,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 13}).toJSDate(),
                        y: 31.91,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 16}).toJSDate(),
                        y: 29.68,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 19}).toJSDate(),
                        y: 29.57,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 22}).toJSDate(),
                        y: 33.13,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 25}).toJSDate(),
                        y: 37.08,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 28}).toJSDate(),
                        y: 35.86,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 1}).toJSDate(),
                        y: 39.65,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 4}).toJSDate(),
                        y: 39.01,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 7}).toJSDate(),
                        y: 34.10,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 10}).toJSDate(),
                        y: 37.48,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 13}).toJSDate(),
                        y: 39.29,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 16}).toJSDate(),
                        y: 38.46,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 19}).toJSDate(),
                        y: 37.71,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 22}).toJSDate(),
                        y: 40.15,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 25}).toJSDate(),
                        y: 35.89,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 28}).toJSDate(),
                        y: 31.50,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 1}).toJSDate(),
                        y: 30.50,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 4}).toJSDate(),
                        y: 25.74,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 7}).toJSDate(),
                        y: 28.23,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 10}).toJSDate(),
                        y: 28.48,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 13}).toJSDate(),
                        y: 30.00,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 16}).toJSDate(),
                        y: 32.16,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 19}).toJSDate(),
                        y: 32.99,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 22}).toJSDate(),
                        y: 37.68,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 25}).toJSDate(),
                        y: 35.24,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 28}).toJSDate(),
                        y: 39.18,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 1}).toJSDate(),
                        y: 41.45,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 4}).toJSDate(),
                        y: 43.78,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 7}).toJSDate(),
                        y: 39.41,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 10}).toJSDate(),
                        y: 39.32,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 13}).toJSDate(),
                        y: 43.80,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 16}).toJSDate(),
                        y: 42.43,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 19}).toJSDate(),
                        y: 43.67,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 22}).toJSDate(),
                        y: 38.79,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 25}).toJSDate(),
                        y: 43.57,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 28}).toJSDate(),
                        y: 41.81,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 1}).toJSDate(),
                        y: 46.19,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 4}).toJSDate(),
                        y: 47.69,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 7}).toJSDate(),
                        y: 49.01,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 10}).toJSDate(),
                        y: 46.40,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 13}).toJSDate(),
                        y: 51.28,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 16}).toJSDate(),
                        y: 50.15,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 19}).toJSDate(),
                        y: 53.60,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 22}).toJSDate(),
                        y: 56.08,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 25}).toJSDate(),
                        y: 52.72,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 28}).toJSDate(),
                        y: 56.60,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 1}).toJSDate(),
                        y: 58.36,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 4}).toJSDate(),
                        y: 56.59,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 7}).toJSDate(),
                        y: 55.75,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 10}).toJSDate(),
                        y: 54.74,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 13}).toJSDate(),
                        y: 54.27,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 16}).toJSDate(),
                        y: 58.65,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 19}).toJSDate(),
                        y: 57.00,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 22}).toJSDate(),
                        y: 60.52,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 25}).toJSDate(),
                        y: 57.60,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 28}).toJSDate(),
                        y: 56.48,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 1}).toJSDate(),
                        y: 54.35,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 4}).toJSDate(),
                        y: 52.39,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 7}).toJSDate(),
                        y: 54.52,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 10}).toJSDate(),
                        y: 54.16,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 13}).toJSDate(),
                        y: 51.95,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 16}).toJSDate(),
                        y: 51.19,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 19}).toJSDate(),
                        y: 46.35,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 22}).toJSDate(),
                        y: 48.33,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 25}).toJSDate(),
                        y: 45.84,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 28}).toJSDate(),
                        y: 48.22,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 1}).toJSDate(),
                        y: 45.82,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 4}).toJSDate(),
                        y: 43.48,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 7}).toJSDate(),
                        y: 41.32,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 10}).toJSDate(),
                        y: 40.99,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 13}).toJSDate(),
                        y: 38.49,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 16}).toJSDate(),
                        y: 40.10,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 19}).toJSDate(),
                        y: 44.86,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 22}).toJSDate(),
                        y: 44.03,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 25}).toJSDate(),
                        y: 41.41,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 28}).toJSDate(),
                        y: 37.80,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 1}).toJSDate(),
                        y: 35.24,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 4}).toJSDate(),
                        y: 32.12,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 7}).toJSDate(),
                        y: 35.68,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 10}).toJSDate(),
                        y: 38.00,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 13}).toJSDate(),
                        y: 37.96,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 16}).toJSDate(),
                        y: 38.70,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 19}).toJSDate(),
                        y: 37.45,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 22}).toJSDate(),
                        y: 37.51,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 25}).toJSDate(),
                        y: 33.10,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 28}).toJSDate(),
                        y: 35.09,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 1}).toJSDate(),
                        y: 31.87,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 4}).toJSDate(),
                        y: 29.18,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 7}).toJSDate(),
                        y: 31.91,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 10}).toJSDate(),
                        y: 34.37,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 13}).toJSDate(),
                        y: 32.91,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 16}).toJSDate(),
                        y: 33.17,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 19}).toJSDate(),
                        y: 37.16,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 22}).toJSDate(),
                        y: 32.60,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 25}).toJSDate(),
                        y: 36.94,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 28}).toJSDate(),
                        y: 35.98,
                    },
                ],
            },
            {
                name: 'Actual',
                data: [
                    {
                        x: now.minus({months: 12}).plus({day: 1}).toJSDate(),
                        y: 20.21,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 4}).toJSDate(),
                        y: 17.49,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 7}).toJSDate(),
                        y: 16.54,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 10}).toJSDate(),
                        y: 19.00,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 13}).toJSDate(),
                        y: 16.47,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 16}).toJSDate(),
                        y: 13.15,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 19}).toJSDate(),
                        y: 18.07,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 22}).toJSDate(),
                        y: 17.93,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 25}).toJSDate(),
                        y: 18.92,
                    },
                    {
                        x: now.minus({months: 12}).plus({day: 28}).toJSDate(),
                        y: 18.46,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 1}).toJSDate(),
                        y: 18.04,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 4}).toJSDate(),
                        y: 17.78,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 7}).toJSDate(),
                        y: 20.15,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 10}).toJSDate(),
                        y: 18.92,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 13}).toJSDate(),
                        y: 17.08,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 16}).toJSDate(),
                        y: 17.11,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 19}).toJSDate(),
                        y: 15.70,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 22}).toJSDate(),
                        y: 15.07,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 25}).toJSDate(),
                        y: 14.51,
                    },
                    {
                        x: now.minus({months: 11}).plus({day: 28}).toJSDate(),
                        y: 15.22,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 1}).toJSDate(),
                        y: 19.77,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 4}).toJSDate(),
                        y: 23.67,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 7}).toJSDate(),
                        y: 27.98,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 10}).toJSDate(),
                        y: 30.80,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 13}).toJSDate(),
                        y: 28.56,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 16}).toJSDate(),
                        y: 27.45,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 19}).toJSDate(),
                        y: 27.50,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 22}).toJSDate(),
                        y: 27.28,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 25}).toJSDate(),
                        y: 24.36,
                    },
                    {
                        x: now.minus({months: 10}).plus({day: 28}).toJSDate(),
                        y: 22.89,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 1}).toJSDate(),
                        y: 28.04,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 4}).toJSDate(),
                        y: 27.77,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 7}).toJSDate(),
                        y: 30.24,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 10}).toJSDate(),
                        y: 26.57,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 13}).toJSDate(),
                        y: 22.18,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 16}).toJSDate(),
                        y: 19.64,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 19}).toJSDate(),
                        y: 16.74,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 22}).toJSDate(),
                        y: 17.21,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 25}).toJSDate(),
                        y: 20.05,
                    },
                    {
                        x: now.minus({months: 9}).plus({day: 28}).toJSDate(),
                        y: 16.13,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 1}).toJSDate(),
                        y: 10.71,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 4}).toJSDate(),
                        y: 7.99,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 7}).toJSDate(),
                        y: 11.33,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 10}).toJSDate(),
                        y: 15.36,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 13}).toJSDate(),
                        y: 20.16,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 16}).toJSDate(),
                        y: 22.56,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 19}).toJSDate(),
                        y: 19.34,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 22}).toJSDate(),
                        y: 18.32,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 25}).toJSDate(),
                        y: 20.75,
                    },
                    {
                        x: now.minus({months: 8}).plus({day: 28}).toJSDate(),
                        y: 17.09,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 1}).toJSDate(),
                        y: 18.31,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 4}).toJSDate(),
                        y: 14.34,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 7}).toJSDate(),
                        y: 9.93,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 10}).toJSDate(),
                        y: 10.64,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 13}).toJSDate(),
                        y: 6.18,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 16}).toJSDate(),
                        y: 10.32,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 19}).toJSDate(),
                        y: 12.80,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 22}).toJSDate(),
                        y: 13.44,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 25}).toJSDate(),
                        y: 18.35,
                    },
                    {
                        x: now.minus({months: 7}).plus({day: 28}).toJSDate(),
                        y: 22.87,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 1}).toJSDate(),
                        y: 26.92,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 4}).toJSDate(),
                        y: 22.50,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 7}).toJSDate(),
                        y: 18.14,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 10}).toJSDate(),
                        y: 19.06,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 13}).toJSDate(),
                        y: 19.73,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 16}).toJSDate(),
                        y: 18.82,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 19}).toJSDate(),
                        y: 23.33,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 22}).toJSDate(),
                        y: 20.48,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 25}).toJSDate(),
                        y: 25.47,
                    },
                    {
                        x: now.minus({months: 6}).plus({day: 28}).toJSDate(),
                        y: 28.84,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 1}).toJSDate(),
                        y: 27.71,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 4}).toJSDate(),
                        y: 25.22,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 7}).toJSDate(),
                        y: 25.43,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 10}).toJSDate(),
                        y: 24.13,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 13}).toJSDate(),
                        y: 20.02,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 16}).toJSDate(),
                        y: 18.38,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 19}).toJSDate(),
                        y: 18.30,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 22}).toJSDate(),
                        y: 18.72,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 25}).toJSDate(),
                        y: 22.46,
                    },
                    {
                        x: now.minus({months: 5}).plus({day: 28}).toJSDate(),
                        y: 21.71,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 1}).toJSDate(),
                        y: 29.88,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 4}).toJSDate(),
                        y: 26.94,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 7}).toJSDate(),
                        y: 28.06,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 10}).toJSDate(),
                        y: 30.40,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 13}).toJSDate(),
                        y: 28.98,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 16}).toJSDate(),
                        y: 30.13,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 19}).toJSDate(),
                        y: 27.60,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 22}).toJSDate(),
                        y: 30.21,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 25}).toJSDate(),
                        y: 26.88,
                    },
                    {
                        x: now.minus({months: 4}).plus({day: 28}).toJSDate(),
                        y: 25.72,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 1}).toJSDate(),
                        y: 27.89,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 4}).toJSDate(),
                        y: 30.69,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 7}).toJSDate(),
                        y: 31.42,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 10}).toJSDate(),
                        y: 36.14,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 13}).toJSDate(),
                        y: 32.02,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 16}).toJSDate(),
                        y: 27.30,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 19}).toJSDate(),
                        y: 29.51,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 22}).toJSDate(),
                        y: 32.67,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 25}).toJSDate(),
                        y: 28.82,
                    },
                    {
                        x: now.minus({months: 3}).plus({day: 28}).toJSDate(),
                        y: 28.85,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 1}).toJSDate(),
                        y: 29.15,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 4}).toJSDate(),
                        y: 27.90,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 7}).toJSDate(),
                        y: 30.71,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 10}).toJSDate(),
                        y: 28.02,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 13}).toJSDate(),
                        y: 23.82,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 16}).toJSDate(),
                        y: 18.83,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 19}).toJSDate(),
                        y: 14.48,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 22}).toJSDate(),
                        y: 11.76,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 25}).toJSDate(),
                        y: 12.75,
                    },
                    {
                        x: now.minus({months: 2}).plus({day: 28}).toJSDate(),
                        y: 11.36,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 1}).toJSDate(),
                        y: 11.60,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 4}).toJSDate(),
                        y: 15.24,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 7}).toJSDate(),
                        y: 13.05,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 10}).toJSDate(),
                        y: 17.25,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 13}).toJSDate(),
                        y: 18.50,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 16}).toJSDate(),
                        y: 23.04,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 19}).toJSDate(),
                        y: 21.87,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 22}).toJSDate(),
                        y: 25.97,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 25}).toJSDate(),
                        y: 22.46,
                    },
                    {
                        x: now.minus({months: 1}).plus({day: 28}).toJSDate(),
                        y: 17.67,
                    },
                ],
            },
        ],
    },
    budget            : {
        expenses     : 11763.34,
        expensesLimit: 20000,
        savings      : 10974.12,
        savingsGoal  : 250000,
        bills        : 1789.22,
        billsLimit   : 1000,
    },
    previousStatement : {
        status : 'paid',
        date   : now.startOf('day').minus({days: 15}).toFormat('DDD'),
        limit  : 34500,
        spent  : 27221.21,
        minimum: 7331.94,
    },
    currentStatement  : {
        status : 'pending',
        date   : now.startOf('day').minus({days: 15}).plus({month: 1}).toFormat('DDD'),
        limit  : 34500,
        spent  : 39819.41,
        minimum: 9112.51,
    },
    recentTransactions: [
        {
            id           : '1b6fd296-bc6a-4d45-bf4f-e45519a58cf5',
            transactionId: '528651571NT',
            name         : 'Morgan Page',
            amount       : +1358.75,
            status       : 'completed',
            date         : '2019-10-07T22:22:37.274Z',
        },
        {
            id           : '2dec6074-98bd-4623-9526-6480e4776569',
            transactionId: '421436904YT',
            name         : 'Nita Hebert',
            amount       : -1042.82,
            status       : 'completed',
            date         : '2019-12-18T14:51:24.461Z',
        },
        {
            id           : 'ae7c065f-4197-4021-a799-7a221822ad1d',
            transactionId: '685377421YT',
            name         : 'Marsha Chambers',
            amount       : +1828.16,
            status       : 'pending',
            date         : '2019-12-25T17:52:14.304Z',
        },
        {
            id           : '0c43dd40-74f6-49d5-848a-57a4a45772ab',
            transactionId: '884960091RT',
            name         : 'Charmaine Jackson',
            amount       : +1647.55,
            status       : 'completed',
            date         : '2019-11-29T06:32:16.111Z',
        },
        {
            id           : 'e5c9f0ed-a64c-4bfe-a113-29f80b4e162c',
            transactionId: '361402213NT',
            name         : 'Maura Carey',
            amount       : -927.43,
            status       : 'completed',
            date         : '2019-11-24T12:13:23.064Z',
        },
    ],
};
