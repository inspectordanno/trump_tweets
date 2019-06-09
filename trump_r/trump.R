library(tidyverse)
library(sentimentr)
library(jsonlite)

tweets <- fromJSON('trumptweets.json')
data("presidential_debates_2012")

sentences <- tweets %>%
  get_sentences()

sentiment <- sentiment(sentences)
sentimentWords <- extract_emotion_terms(sentences)
emotion <- emotion(sentences)
profanity <- profanity(sentences)

getTweets <- function(searchTerm) {
  filteredTweets <- filter(sentiment, str_detect(text, fixed(searchTerm, ignore_case = TRUE))) %>%
    mutate(subject = searchTerm)
  return(filteredTweets)
}

selectSentimentandSubject <- function(tweetList) {
  select(tweetList, 'subject', 'sentiment')
}

veterans <- getTweets('veterans') %>%
  selectSentimentandSubject()

hillary <- getTweets('hillary')  %>%
  selectSentimentandSubject()

pence <- getTweets('pence')  %>%
  selectSentimentandSubject()

joinedTweets <- full_join(veterans, hillary) %>%
  full_join(pence)

ggplot(joinedTweets, aes(x=sentiment, color=subject)) +
  geom_density()
