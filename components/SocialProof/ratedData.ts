export interface ratedStar {
  stars: number
  text: string
  classe: string
}

export const ratedData: ratedStar[] = [
  {
    stars: 5,
    text: 'Rated 5 Stars in Reviews',
    classe: 'top_rated'
  },
  {
    stars: 5,
    text: 'Rated 5 Stars in Report Guru',
    classe: 'middle_rated'
  },
  {
    stars: 5,
    text: 'Rated 5 Stars in BestTech',
    classe: 'bottom_rated'
  },
]