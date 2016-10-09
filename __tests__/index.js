import m from '../';

describe('dango', () => {
  it('should return some emojis', async () => {
    // eslint-disable-next-line global-require, no-underscore-dangle
    require('got').__setFakeData({
      results: [
        {
          text: '🍕',
          score: 0.6858612895,
        },
        {
          text: '😋',
          score: 0.02997607924,
        },
        {
          text: '😍',
          score: 0.02023460716,
        },
        {
          text: '🐷',
          score: 0.010817755945,
        },
        {
          text: '👅',
          score: 0.0093791456893,
        },
        {
          text: '🙌',
          score: 0.0077837170102,
        },
        {
          text: '😛',
          score: 0.007717252709,
        },
        {
          text: '👌',
          score: 0.0075424523093,
        },
        {
          text: '❤',
          score: 0.0074847843498,
        },
        {
          text: '🍴',
          score: 0.0063261617906,
        },
      ],
    });
    const results = await m('pizza');
    expect(results).toContainEqual({
      text: '🍕',
      score: 0.6858612895,
    });
  });

  it('should handle errors', async () => {
    // eslint-disable-next-line global-require, no-underscore-dangle
    require('got').__setReject(true);
    try {
      await m('PRODUCES_AN_ERROR');
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });
});
