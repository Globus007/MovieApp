import * as yup from 'yup';

export const schema = yup.object({
  title: yup.string().required(),
  poster_path: yup.string().url().nullable().required(),
  genres: yup.array().of(yup.string().min(1)).required(),
  release_date: yup.date().default(() => new Date()),
  vote_average: yup.number().positive(),
  runtime: yup.number().integer().required(),
  overview: yup.string().required(),
});
