import { makeAnswer } from 'test/factories/make-answer'
import { OnAnswerCreated } from './on-answer-created'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAttachmentsRepository: InMemoryAnswerAttachmentsRepository

describe('on answer created', () => {
  beforeEach(() => {
    inMemoryAttachmentsRepository = new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAttachmentsRepository,
    )
  })

  it('should send a notification when an answer is created', async () => {
    new OnAnswerCreated() // eslint-disable-line
    const answer = makeAnswer()

    inMemoryAnswersRepository.create(answer)
  })
})
