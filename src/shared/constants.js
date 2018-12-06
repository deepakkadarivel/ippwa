export default {
  EMPTY_STRING: '',
  DEFAULT_NUMBER: 0,
  DEFAULT_BOOL: false,
  DEFAULT_SORT: 'asc',
  DEFAULT_TASK_ROWS: 100,
  SERVER_UNAVAILABLE: 'Sorry, Server under maintenance. Try after few minutes or contact support.',
  SESSION_EXPIRED: 'Session expired. Please login again',
  LOCAL_STORAGE: {
    COOKIE: 'cookie',
    LOADBALANCER: 'loadBalancer',
    USER_ID: 'UserId',
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    ORG_NAME: 'orgName',
    ORG_ID: 'orgId'
  },
  TASKS_WORKFLOW_IDS: {
    PO_REQUISITION_PROCESSING_TYPE: 8,
    PICKUP_PROCESSING_TYPE: 9,
    ASSET_PROCESSING_TYPE: 12,
    INVOICE_PROCESSING_TYPE: 11
  },
  tasks: {
    columns: {
      workflowTypeName: 'Task Type',
      supplierName: 'Supplier',
      stageName: 'Stage',
      contractNo: 'Contract',
      contractOwner: 'Contract Owner',
      requestedBy: 'Requested By',
      poRequestNo: 'PO Request #',
      poNo: 'PO #',
      pickUpRequestNo: 'Pickup Request #',
      invoiceNo: 'Invoice #',
      assetRequestNo: 'Asset Request #',
      customerPONo: 'Sales Order PO #',
      customerInvoiceNo: 'Sales Invoice #',
      quoteRequestNo: 'Quotation Request #',
      costingRequestNo: 'Costing Request #',
      indentRequestNo: 'Indent Request #',
      travelRequestNo: 'Travel Request #',
      claimRequestNo: 'Advance OR Claim Request #',
      createdDate: 'Created Date',
      dueDateString: 'Due Date',
      status: 'Status'
    },
    actions: {
      APPROVE: 'APPROVE',
      REJECT: 'REJECT'
    }
  },
  API_TYPES: {
    APPROVE_PO_REQ_TYPE_API: 4,
    EDIT_PO_AMENDMENT_TYPE_API: 17,
    APPROVE_PICK_UP_TYPE_API: 9,
    APPROVE_INVOICE_TYPE_API: 13,
    APPROVE_ASSET_TYPE_API: 11,
    UPDATE_PO_AMENDMENT_TYPE_API: 18,
    UPDATE_PO_REQ_TYPE_API: 5,
    UPDATE_PICK_UP_TYPE_API: 10,
    UPDATE_ASSET_TYPE_API: 12,
    UPDATE_INVOICE_TYPE_API: 14,
  },

  TASK: {
    PO_AMENDMENT_TITLE: 'PO Amendment',
    PICK_UP_TITLE: 'Pickup - Edit Request Item',
    ASSET_TITLE: 'Edit Asset',
    INVOICE_TITLE: 'Edit Invoice'
  },

  TOAST: {
    VARIANTS: {
      SUCCESS: 'success',
      ERROR: 'error',
      WARNING: 'warning',
      INFO: 'info',
    }
  }
};
