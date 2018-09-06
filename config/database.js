'use strict';

module.exports = {
  'development': {
    'username': 'root',
    'password': process.env.MYSQL_PASS || '12345',
    'database': 'task',
    'host': process.env.MYSQL_HOST|| '127.0.0.1',
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': process.env.MYSQL_PASS || '12345',
    'database': 'task_test',
    'host': process.env.MYSQL_HOST|| '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': 'sql2236650',
    'password': 'jJ8!nJ9!',
    'database': 'sql2236650',
    'host': 'sql2.freemysqlhosting.net',
    'dialect': 'mysql'
  }
};
