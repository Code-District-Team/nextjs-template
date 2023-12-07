import { permanentRedirect } from 'next/navigation';

import K from '@/constants';

interface IRequest {
  url: string;
  method: string; // 'GET', 'POST', etc.
  body?: any;
  headers?: { [key: string]: string };
}

export default class NetworkCall {
  static async makeApiCall<T>(
    request: IRequest,
    cacheOptions: RequestInit = { cache: 'no-store' }
  ): Promise<T> {
    const options: RequestInit = {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        ...request.headers,
      },
    };

    if (request.body) {
      options.body = JSON.stringify(request.body);
    }

    try {
      let response: Response;
      if (request.method.toLowerCase() === 'get') {
        response = await fetch(request.url, cacheOptions);
      } else {
        response = await fetch(request.url, options);
      }
      await this.handleResponseStatus(response);

      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        return (await response.json()) as T;
      } else {
        // Handle other content types (e.g., text/plain) here
        // Make sure to return something of type T or throw an error
        throw new Error('Unsupported content type: ' + contentType);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        throw error;
      }
      throw new Error('An unknown error occurred');
    }
  }

  /**
   * Handles different HTTP response statuses.
   * @param {Response} response - The fetch response object.
   */

  private static async handleResponseStatus(response: Response): Promise<void> {
    const statusCode = K.Network.StatusCode;
    const responseStatus = response.status;

    switch (responseStatus) {
      case statusCode.Successful:
        return; // Successful response, no action needed
      case statusCode.BadRequest:
        // Handle bad request
        break;
      case statusCode.Unauthorized:
        // Logout or redirect
        // permanentRedirect("/unauthorized");
        throw new Error('Unauthorized');
      case statusCode.Forbidden:
        // Redirect to Forbidden Fallback UI
        permanentRedirect('/unauthorized');
        break;
      case statusCode.ServerError:
        console.error('Server error');
        // Redirect to Server Error Fallback UI
        break;
      default:
        throw new Error(`Error: ${responseStatus} - ${response.statusText}`);
    }
  }
}
