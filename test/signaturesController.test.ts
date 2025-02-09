/**
 * Fortis APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  OrderEnum,
  ResourceEnum,
  ResponseSignature,
  ResponseSignaturesCollection,
  SignaturesController,
  Type2Enum,
  Type3Enum,
  Type4Enum,
  Type67Enum,
  Type68Enum,
} from '../src';
import { testClient } from './testClient';
import {
  expectHeadersToMatch,
  expectMatchingWithOptions,
  makeApiCall,
} from './testHelper';

describe('SignaturesController', () => {
  let controller : SignaturesController;

  beforeAll(() => {
    controller = new SignaturesController(testClient);
  });

  it('should Test List all signatures record', async () => {
    const response = await makeApiCall(
      () => controller.listAllSignaturesRecord(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: ResponseSignaturesCollection = {
      type: Type68Enum.SignaturesCollection,
      list: [
        {
          signature: 'iVBORw0KGgoAAAANSUhEUgAAANwAAAAsCAYAAAAOyNaYAAACvklEQVR4nO3bLZOqUBjA8ScaNxqNRiKRaCQaiXwEG7cRiUajH8FINBqJRCKR+NxyD4OIXtaXw2H3/5s5MwZ39rgz/zkvuKKqgar+YTAYnx/y7wUACwgOsIjgAIsIznFlWerlcpl6GngTgnNYVVW6WCxURDTLsqmngzcgOMdtNhsVERURDYJA8zyfekp4AcE5oCgKzfN8cOvYNM1VdCKiURRNMEu8A8FNrCzLm5j68Q1Fx2o3TwTngCzLNAiCq6D6UTVNo0mS6NfXF+HNGME5or+KeZ7XxrVcLjWOY83zXOu6vnqfeQ/bzHkgOIf0VzHP83Sz2eh6vW4D831fy7JsowvDsH1NdO4jOAfVdX0VXhRFWhSFRlHUrmr7/b4NLU3T9jVbTLcRnMO620ezep1Op3bF832/3XIORQr3EJzjumc7E9HQBUoYhjdnPKJzD8E5xjyT647T6aSr1UpFRPf7ffveuq41TdOHZzyicwvBTeBeVGEY3jwaGBrmWV3/Z82K1z/jca5zB8F9wFBQY6JaLBYax7EmSXJ3DD2v624rzUpoVrsgCDjXOWRWwVVVNfUUrvTDGrNK3YsqTdNRn69pGs2y7NshssV0w2yCK4pCRUSPx+Okc/hfWI9WqbFRPaMbYjc+s7ptt1uic8BsgsvzXEVED4fDR3/P2PPVUFifDOo7THxmPiY03/fZXk7s1wR371z1zPnKlbDGuvc9TKKz78cE9yio3W436vbv1fOV6/oPx010/Ee5PbMLbrfbPRWU53kPb/9+SlRj9L8ALcJ/lNsym+DO5/PTQaVpqnVdT/0RnGLOed0LlikvpH6L2QSnqoPX4QT1mu4FC3/Dz5tVcMDcERxgEcEBFhEcYBHBARYRHGARwQEWERxgEcEBFhEcYBHBARYRHGARwQEWERxgEcEBFhEcYBHBARYRHGDRX+EC0ah++pNrAAAAAElFTkSuQmCC',
          resource: ResourceEnum.Transaction,
          resourceId: '11e95f8ec39de8fbdb0a4f1a',
          id: '11e95f8ec39de8fbdb0a4f1a',
          createdTs: 1422040992,
          modifiedTs: 1422040992,
          rawSignature: ' ',
        }
      ],
      links: {
        type: Type2Enum.Links,
        first: '/v1/endpoint?page[size]=10&page[number]=1',
        previous: '/v1/endpoint?page[size]=10&page[number]=5',
        next: '/v1/endpoint?page[size]=10&page[number]=7',
        last: '/v1/endpoint?page[size]=10&page[number]=42',
      },
      pagination: {
        type: Type3Enum.Pagination,
        totalCount: 423,
        pageCount: 42,
        pageNumber: 6,
        pageSize: 10,
      },
      sort: {
        type: Type4Enum.Sorting,
        fields: [
          {
            field: 'last_name',
            order: OrderEnum.Asc,
          }
        ],
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });

  it('should Test View single signature record', async () => {
    const signatureId = '11e95f8ec39de8fbdb0a4f1a';

    const response = await makeApiCall(
      () => controller.viewSingleSignatureRecord(
        signatureId,
        undefined,
        undefined
      )
    );

    expect(response.statusCode).toBe(200);

    const expectedHeaders = { 'Content-Type': ['application/json', true] };

    expectHeadersToMatch(response.headers, expectedHeaders);

    const expected: ResponseSignature = {
      type: Type67Enum.Signature,
      data: {
        signature: 'iVBORw0KGgoAAAANSUhEUgAAANwAAAAsCAYAAAAOyNaYAAACvklEQVR4nO3bLZOqUBjA8ScaNxqNRiKRaCQaiXwEG7cRiUajH8FINBqJRCKR+NxyD4OIXtaXw2H3/5s5MwZ39rgz/zkvuKKqgar+YTAYnx/y7wUACwgOsIjgAIsIznFlWerlcpl6GngTgnNYVVW6WCxURDTLsqmngzcgOMdtNhsVERURDYJA8zyfekp4AcE5oCgKzfN8cOvYNM1VdCKiURRNMEu8A8FNrCzLm5j68Q1Fx2o3TwTngCzLNAiCq6D6UTVNo0mS6NfXF+HNGME5or+KeZ7XxrVcLjWOY83zXOu6vnqfeQ/bzHkgOIf0VzHP83Sz2eh6vW4D831fy7JsowvDsH1NdO4jOAfVdX0VXhRFWhSFRlHUrmr7/b4NLU3T9jVbTLcRnMO620ezep1Op3bF832/3XIORQr3EJzjumc7E9HQBUoYhjdnPKJzD8E5xjyT647T6aSr1UpFRPf7ffveuq41TdOHZzyicwvBTeBeVGEY3jwaGBrmWV3/Z82K1z/jca5zB8F9wFBQY6JaLBYax7EmSXJ3DD2v624rzUpoVrsgCDjXOWRWwVVVNfUUrvTDGrNK3YsqTdNRn69pGs2y7NshssV0w2yCK4pCRUSPx+Okc/hfWI9WqbFRPaMbYjc+s7ptt1uic8BsgsvzXEVED4fDR3/P2PPVUFifDOo7THxmPiY03/fZXk7s1wR371z1zPnKlbDGuvc9TKKz78cE9yio3W436vbv1fOV6/oPx010/Ee5PbMLbrfbPRWU53kPb/9+SlRj9L8ALcJ/lNsym+DO5/PTQaVpqnVdT/0RnGLOed0LlikvpH6L2QSnqoPX4QT1mu4FC3/Dz5tVcMDcERxgEcEBFhEcYBHBARYRHGARwQEWERxgEcEBFhEcYBHBARYRHGARwQEWERxgEcEBFhEcYBHBARYRHGDRX+EC0ah++pNrAAAAAElFTkSuQmCC',
        resource: ResourceEnum.Transaction,
        resourceId: '11e95f8ec39de8fbdb0a4f1a',
        id: '11e95f8ec39de8fbdb0a4f1a',
        createdTs: 1422040992,
        modifiedTs: 1422040992,
        rawSignature: ' ',
      },
    };

    expect(response.result).not.toBeNull();
    expectMatchingWithOptions(
      expected,
      response.result,
      { allowExtra: true, isOrdered: false, checkValues: false }
    );
  });
});
