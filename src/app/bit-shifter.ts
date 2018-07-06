import { Component, OnInit, Injectable  } from '@angular/core';

@Injectable()
export class Block  {
    private map:  Map<string, string> = new Map<string, string>();

    eachblock(type, x, y, dir, fn) {
        let bit = 0;
        const result = 0;
        let row = 0;
        let col = 0;
        const blocks = type.blocks[dir];
        for(bit = 0x8000 ; bit > 0 ; bit = bit >> 1) {
          if (blocks & bit) {
            fn(x + col, y + row);
          }
          if (++col === 4) {
            col = 0;
            ++row;
          }
        }
      };
}