module.exports = {
  extends: ['@commitlint/config-angular'],

  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'docs',
        'config',
        'chore',
        'feat',
        'fix',
        'build',
        'ci',
        'merge',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
