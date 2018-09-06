'use strict';

const chai = require('chai');
const { describe, it, beforeEach  } = require('mocha');
const { find } = require('../controllers/districtsController');
const models = require('../models/index');
const sinon = require('sinon');
const { expect } = chai;
const ONE = 1;


describe('find Districts', () => {
  beforeEach (async function () {
    this.createdDistrict = await models.districts.create({ name: 'Azizia', city_id: 1 });
  });

  it('in case of page and perPage defined', async function () {
    const cityId = ONE;
    const districtsModelMocked = sinon.mock(models.districts);
    districtsModelMocked.expects('findAll').once().withExactArgs({ where: { city_id: cityId } })
      .returns(this.createdDistrict);

    const res = {
      status: function () {
        return {
          json: function (data) {
            return data;
          }
        };
      }
    };
    const result = await find({ params: { cityId: cityId } }, res);
    expect(result).to.deep.equal(this.createdDistrict);
  });
});