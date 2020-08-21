export class Quote {
    constructor(
        public TextQuote: string,
        public AuthorOfQuote: string,
        public PostedBy: string,
        public PostDate: Date,
        public upvotes: number,
        public downvotes: number
      ) {  }
}
