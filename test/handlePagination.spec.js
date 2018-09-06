'use strict';

const chai = require('chai');
const { describe, it } = require('mocha');
const { handlePagination } = require('../utilities/helper');
const { expect } = chai;
const TEN = 10;
const ZERO = 0;

describe('handle pagination', () => {

  it('in case of page and perPage defined', function () {
    const page = 2;
    const perPage = 10;
    const result =handlePagination(page, perPage);
    expect(result).to.deep.equal({ limit: TEN, offset: TEN });
  });

  it('in case of only page defined', function () {
    const page = 5;
    const result =handlePagination(page, undefined);
    expect(result).to.deep.equal({ limit: TEN, offset: 40 });
  });

  it('in case of only perPage defined', function () {
    const perPage = 10;
    const result =handlePagination(undefined, perPage);
    expect(result).to.deep.equal({ limit: perPage, offset: ZERO });
  });

  it('in case of page and perPage not defined', function () {
    const result =handlePagination(undefined, undefined);
    expect(result).to.deep.equal({ limit: TEN, offset: ZERO });
  });

  it('in case of page and perPage defined and it`s type is string', function () {
    const page = '2';
    const perPage = '10';
    const result =handlePagination(page, perPage);
    expect(result).to.deep.equal({ limit: TEN, offset: TEN });
  });

  it('in case of page defined and it`s type is object', function () {
    const page = { 2: 2 };
    expect(() => handlePagination(page, undefined)).to.throw('page parameter must be a number');
  });

  it('in case of perPage defined and it`s type is object', function () {
    const perPage = { 2: 2 };
    expect(() => handlePagination(undefined, perPage)).to.throw('per page parameter must be a number');
  });
});