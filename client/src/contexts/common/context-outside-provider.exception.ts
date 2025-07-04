import { FC } from "react";

export class ContextUsedOutsideProviderException extends Error {
  constructor(readonly useContextName: Function, readonly providerName: FC<any>) {
    super(
      `${useContextName.name} must be used within a ${ContextUsedOutsideProviderException.name}`
    );
  }
}
