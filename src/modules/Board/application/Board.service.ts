import { Inject, Injectable } from '@nestjs/common';
//import { BoardDto } from '@Board/application/dto/BoardSend.dto';

@Injectable()
export class BoardService {
  public async all() {
    const result = await fetch(
      'https://api.trello.com/1/boards/641c6ed5b7c345e73201ab6e/cards?key=a49155a5654d0203fa9f201f56b697dc&token=ATTA77348b11336bbaa4792e3fa414df9a9c36a2eb5c341e924d0f41fdb29d279a0dB956A35A',
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      });

    return result;
  }

  public async actions() {
    const result = await fetch(
      'https://api.trello.com/1/boards/XJgnjCv5/actions?key=a49155a5654d0203fa9f201f56b697dc&token=ATTA77348b11336bbaa4792e3fa414df9a9c36a2eb5c341e924d0f41fdb29d279a0dB956A35A',
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const response = res[0];
        // let boardInfo = response.data.board;
        let responseObj = response;
        return res;
      })
      .catch((err) => {
        console.log('Error: ' + err);
        return err;
      });

    return result;
  }
}
