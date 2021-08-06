export default {
  log: {
    login: 'Login',
    title: 'Log Management',
    exportBtn: 'Export',
    deleteBtn: 'Delete',
    clearBtn: 'Clear',
    username: 'Username',
    handle: 'Operation',
    handleTime: 'Operation time',
    selectAllPage: 'Select all this page',
    deleteInfo: 'After the log is deleted, it will not be recoverable',
    deleteDesc: 'Please confirm whether to delete? ',
    deleteEnter: 'Confirm to delete',
    deleteClear: 'Cancel',
    clearEnter: 'Confirm to clear',
    clearClear: 'Cancel',
    deleteTitle: 'Delete log',
    clearTitle: 'Clear log',
    clearInfo: 'After the log is cleared, it will not be recoverable',
    clearDesc: 'Please confirm whether to clear? ',
    choseLog: 'Please choose a log',
  },
  base: {
    login: 'login',
    loading: 'Loading...',
    deploy: 'Deploy',
    logout: 'Exit',
    setOpenapi: 'Please configure openapi first',
    helpOpenapi: 'Please contact the administrator to configure openapi',
    oldPassword: 'Please enter the old password',
    newPassword: 'Please enter a new password',
    rePassword: 'Please enter the password again',
    diffPassword: 'The two input passwords are inconsistent',
  },
  menu: {
    projectEdit: 'projectEdit',
    home: 'Home',
    login: 'Login',
    project: 'Project Configuration',
    projectManage: 'Project Configuration',
    projectDetail: 'Project Details',
    vuln: 'application vulnerability',
    vulnList: 'Application Vulnerability List',
    vulnDetail: 'Application vulnerability details',
    sca: 'Component Management',
    scaList: 'Component management list',
    scaDetail: 'Component management details',
    setting: 'System configuration',
    agentManage: 'Engine Management',
    strategyManage: 'Strategy Management',
    hookRule: 'Custom rule',
    upgradeOnline: 'System upgrade',
    sysInfo: 'System Information',
    changePassword: 'Password modification',
    logManage: 'Operation log',
    user: 'Role Management',
    talent: 'Tenant Management',
    department: 'Organization Management',
    taintPool: 'Search',
    search: 'Stain search',
    poolDetail: 'Stain details',
    serverRegister: 'Service Registration',
  },
  views: {
    serverRegister: {
      save: 'Save',
      saveSuccess: 'Save successfully',
    },
    search: {
      commonly: 'Common query syntax',
      copySuccess: 'Copyed',
      copyFail: 'Copy failed',
      important: 'High risk',
      height: 'Medium Danger',
      middle: 'Low risk',
      low: 'No risk',
      graph: 'taint call chain',
      edit: 'Edit',
      http: 'HTTP packet',
      no: 'No',
      assignVuln: 'Associated Vulnerability',
      project: 'Project',
      user: 'User',
      no_project_name: 'Unbound',
      agent: 'Probe',
      running: 'Running',
      stop: 'Stopped',
      sending: 'Replaying',
      send: 'Send',
      copy: 'Copy',
      defPolicy: 'Built-in policy',
      myPolicy: 'My Policy',
      searchValuePlace: 'Please enter the query content',
      prependPlace: 'Filter',
      url: 'URL',
      signature: 'Method signature',
      sinkvalues: 'Stained data',
      req_header_fs: 'Request header',
      req_data: 'Request body',
      res_header: 'Response header',
      res_body: 'Response body',
      empty: 'No matching data',
      warning: 'Please enter search content',
    },
    hookPage: {
      sourceRule: 'Stain source method rule',
      propRule: 'propagation method rule',
      filterRule: 'Filtering method rule',
      dangerRule: 'Dangerous Method Rule',
      allHooksNum: 'Total number of rules',
      sinkHooksNum: 'Number of sink rules',
      selected: 'Selected',
      race: 'kind',
      strip: 'strip',
      selectType: 'Please select the rule type',
      addHookType: 'Add rule type',
      addHook: 'Add rule',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      empty: 'No data temporarily',
      ruleInfo: 'Rule Details',
      point: 'Stain input',
      pointOut: 'Stain output',
      hoopDeep: 'HOOK depth',
      children: 'Subclass',
      nowChildren: 'Current class and subclasses',
      now: 'Current class',
      openTrace: 'Enable taint tracking',
      yes: 'Yes',
      no: 'No',
      updateTime: 'Modification time',
      user: 'creator',
      status: 'Status',
      address: 'Operation',
      edit: 'Edit',
      delpop: 'Are you sure you want to delete it? ',
      hookType: 'Rule Set',
      hooksType: 'Rule Type',
      typeName: 'Type name',
      namePlaceholder:
        'Please enter the type name, such as: String, StringBuilder, etc., it is recommended to use the class name',
      typeShotName: 'Type abbreviation',
      shotNamePlaceholder:
        'Please enter the abbreviation of the type, such as: string-01, string-02, so that you can check it by yourself',
      openOrNot: 'Whether to enable',
      clear: 'Cancel',
      enter: 'OK',
      ruleInfoPlaceholder:
        'Please enter HOOK rules in the format: java.lang.String.<init>(java.lang.String)',
      source: 'Stain source',
      target: 'Where the stain goes',
      relation: 'Please choose a logical relationship',
      origin: 'Please select the data source',
      paramPlaceholder: 'Parameter number, starting from 1',
      add: 'Add',
      hookTrack: 'Stain tracking',
      depth: 'Inheritance depth',
      onlyChildren: 'Only children',
      onlyNow: 'Only the current class',
      or: 'or',
      and: 'and',
      O: 'Object',
      R: 'Return value',
      P: 'Parameter',
      changeOne: 'This operation will be batched',
      changeTwo: 'Data, do you want to continue?',
      pop: 'Prompt',
      changeWarning: 'Please select the data to be operated first',
      spreadType: 'Spreading method rules',
      contaminatedType: 'Pollution source method rules',
      filterType: 'Filtering method rules',
      dangerType: 'Dangerous method rule',
      enterType: 'Entry Method Rules',
    },
    login: {
      title: 'User login',
      subTitle: 'Welcome to IAST system',
      user: 'Account',
      usernamePlaceholder: 'Please enter the account, the default is admin',
      password: 'Password',
      passwordPlaceholder: 'Please enter the password, the default is admin',
      captcha: 'Verification code',
      captchaPlaceholder: 'Please enter the verification code',
    },
    vulnList: {
      filter: 'Filter',
      language: 'language',
      level: 'Level',
      type: 'Type',
      reset: 'Reset',
      resetAll: 'Reset all',
      project_name: 'Project',
      searchExample:
        'Please enter search criteria, such as: http://127.0.0.1:8080',
      searchName: 'Please enter the project name to search',
      sort: 'Please select sort criteria',
      developLanguage: 'Please select a development language',
      vulnStatus: 'Please select the vulnerability status',
      toVeVerified: 'To be verified',
      verification: 'verification in progress',
      confirmed: 'Confirmed',
      ignored: 'Ignored',
      processed: 'Processed',
      choose: 'Selected',
      strip: 'item',
      clear: 'Cancel',
      enter: 'OK',
      verificationBatch: 'Batch verification',
      verificationAll: 'Full verification',
      chooseWarning:
        'Please select the vulnerability that needs to be verified',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      will: 'Coming soon',
      all: 'Full amount',
      batch: 'selectedentry',
      recheckDesc: 'Verify, continue?',
      recheckInfo: 'Prompt',
      has: 'exist',
      vule: 'vulnerability',
      is: 'of',
      reqHas: 'Request appears',
      position: 'Position',
      orderOptions: {
        type: 'Vulnerability type',
        level: 'vulnerability level',
        url: 'url',
        latest_time: 'Latest reporting time',
        first_time: 'First report time',
      },
    },
    vulnDetail: {
      source_value: 'Initial stain',
      target_value: 'Post-spread taint',
      baseInfo: 'Basic Information',
      vulnDesc: 'Vulnerability description',
      recheck: 'Verify',
      export: 'Export',
      delete: 'Delete',
      httpRequest: 'Request packet',
      codeDemo: 'Vulnerable code example',
      graph: 'Stain flow graph',
      suggest: 'Repair suggestion',
      appInfo: 'Application Information',
      devEnv: 'Runtime Environment',
      path: 'Environmental variables',
      url: 'url',
      first_time: 'First appearance',
      serverIp: 'Server IP',
      clientIp: 'Client IP',
      language: 'language',
      port: 'Port',
      projectName: 'Project Name',
      level: 'hazard level',
      counts: 'Number of occurrences',
      type: 'Type',
      file: 'File',
      num: 'line number',
      caller: 'Call method',
      fileAndNum: 'File and line number',
      wuDianZhi: 'Dilution value',
      route: 'Path',
      middleware: 'Middleware',
      command: 'Start command',
      other: 'Other',
      state: 'State',
      taintValue: 'attack vector',
      taintParamName: 'attack parameters',
      agent: 'Probe',
      version: 'Project version',
      reload: 'Refresh',
      has: 'exist',
      vule: 'vulnerability',
      is: 'of',
      reqHas: 'Request appears',
      position: 'Position',
      untreated: 'Untreated',
      replay: 'Request replay',
      stainSource: 'Stain Source',
      communicationMethod: 'Communication Method',
      dangerMethod: 'Dangerous Method',
      deleteVuln: 'Delete vulnerability',
      deleteVulnInfo:
        'After the vulnerability is deleted, it will not be recoverable',
      deleteVulnDesc: 'Please confirm whether to delete? ',
      deleteVulnEnter: 'Confirm to delete',
      cancel: 'Cancel',
      canNotReplay: 'Historical data does not support replay',
      exportSuccess: 'Export report successful',
      exportFail: 'Export report failed',
      empty: 'Empty',
      req: 'Request',
      res: 'Response',
      reported: 'Reported',
      confirmed: 'Confirmed',
      fixed: 'Fixed',
      ignored: 'Ignored',
    },
    scaList: {
      filter: 'Filter',
      language: 'language',
      level: 'Level',
      type: 'Type',
      reset: 'Reset',
      resetAll: 'Reset all',
      project_name: 'Project',
      searchExample: 'Please enter search criteria, such as: spring',
      searchName: 'Please enter the project name to search',
      sort: 'Please select sort criteria',
      developLanguage: 'Please select a development language',
      orderOptions: {
        project_name: 'Project name',
        level: 'Risk level',
        package_name: 'package name',
        version: 'Version',
        language: 'language',
        vul_count: 'Number of risks',
      },
      tableHeaders: {
        close: 'Are you sure to close? ',
        enter: 'Confirm',
        clear: 'Cancel',
        update_time: 'Update time',
        create_time: 'Create time',
        context_path: 'Context',
        method_pool: 'Method Pool',
        http_method: 'Request Method',
        req_header: 'Request body',
        name: 'Component name',
        version: 'Component version',
        application: 'Owned application',
        language: 'language',
        level: 'Security level',
        count: 'Number of vulnerabilities',
        time: 'Discover time',
        componentInfo: 'Component Information',
        dataTest: 'Data packet debugging',
      },
    },
    scaDetail: {
      agent: 'Probe',
      version_now: 'Project version',
      version: 'Component version',
      level: 'Risk level',
      project_name: 'Project name',
      vul_count: 'Number of vulnerabilities',
      unit: 'unit',
      signature_value: 'Component hash',
      vulList: 'Vulnerability list',
      cveNumber: 'CVE Number',
      cweNumber: 'CWE Number',
      vulName: 'vulnerability name',
      vulLevel: 'vulnerability level',
      safeVersion: 'Safe Version',
      operate: 'Operation',
      detail: 'Details',
      reload: 'Refresh',
      vulDetail: {
        title: 'Vulnerability details',
        num: 'Vulnerability number',
        name: 'Vulnerability name',
        desc: 'vulnerability overview',
        detail: 'vulnerability details',
      },
    },
    changePassword: {
      username: 'Username',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      confirmNewPassword: 'Confirm new password',
      submit: 'Confirm',
    },
    agentManage: {
      step: 'time',
      delAgentInfo:
        'This operation will permanently delete the engine, do you want to continue?',
      delAgentPop: 'Prompt',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      delAgent: 'Delete engine',
      enterDel: 'Confirm to delete',
      clear: 'Cancel',
      agentDelInfo:
        'After the engine is deleted, the related data will be deleted and cannot be recovered',
      agentDelPop: 'Please confirm whether to delete? ',
      running: 'Running',
      not_running: 'not running',
      is_core_running: 'Core component running',
      is_core_not_running: 'Core component is not running',
      offline: 'Offline',
      normal: 'Normal',
      state: 'Running state',
      searchValue: 'Please enter search criteria',
      choose: 'Selected',
      strip: 'strip',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      flow: 'Number of requests',
      address: 'Server address',
      payload: 'Server Load',
      status: 'Running status',
      manage: 'Manage',
      owner: 'person in charge',
      timestapm: 'Time',
      projectName: 'Project Name',
      healthy: 'Healthy',
      language: 'language',
    },
    strategyManage: {
      no: 'No',
      edit: 'Edit',
      enter: 'OK',
      clear: 'Cancel',
      del: 'Delete',
      warning: 'Currently there is a strategy being edited',
      deleteWarning:
        'This operation will permanently delete the data, do you want to continue?',
      deletePop: 'Prompt',
      name: 'Policy name',
      detail: 'Strategy Details',
      status: 'Enable status',
      operate: 'Operation',
      fix: 'Repair suggestions',
      addChildren: 'Add child department',
      children: 'child department',
    },
    upgradeOnline: {
      online: 'Online upgrade',
      onlineDesc:
        'Online upgrade needs to connect to the public network to access the remote upgrade server of Dynamic IAST. Please make sure that the current machine can access the public network. ',
      address: 'Upgrade server address',
      onlineSubmit: 'Upgrade now',
      offline: 'Offline upgrade',
      offlineDesc:
        'Please contact FireWire platform after-sales support to obtain the latest offline installation package, thenThen upload the offline installation package for upgrade',
      select: 'Select offline installation package',
      offlineSubmit: 'Upload and upgrade',
      selectFile: 'Select file',
      upload: 'Upload to server',
      uploadInfo: 'Only upload jar files',
    },
    sysInfo: {
      infoTitle: 'Authorization Information',
      infolicense: '',
    },
    projectManage: {
      title: 'Project List',
      name: 'Project name',
      vul: 'vulnerability',
      agent: 'Agent number',
      owner: 'person in charge',
      time: 'Latest time',
      manage: 'Manage',
      add: 'New project',
      searchName: 'Please enter the project name',
    },
    projectEdit: {
      save: 'Save',
      clear: 'Cancel',
      addScan: 'Create a strategy',
      scanName: 'Policy name',
      fid: 'vulnerability type',
      selectAll: 'Select all',
      back: 'Return',
      title: 'Basic Settings',
      name: 'Project name',
      namePlaceholder: 'Please enter the project name',
      mode: 'Scan mode',
      mode1: 'Instrumentation mode',
      mode2: 'Traffic mode',
      agent: 'Select Agent',
      agentPlaceholder: 'Please select Agent',
      scan: 'Scan strategy',
      scanPlaceholder: 'Please select a scan strategy',
      scanAdd: 'New policy template',
      added: 'Added',
      submit: 'Save',
      version_name: 'Version number',
      versionNamePlaceholder: 'Please enter the version number',
      description: 'Version description',
      descriptionPlaceholder: 'Please enter a version description',
    },
    projectDetail: {
      mode: 'Scan mode',
      latest_time: 'Latest time',
      projectDesc: 'Project Overview',
      projectVul: 'Project Vulnerability',
      projectComponent: 'Project component',
      vulNum: 'vulnerability distribution',
      trend: 'risk trend',
      type: 'Type distribution',
      owner: 'person in charge',
      version: 'Version',
      add_version: 'Add version',
      version_dialog: 'Version management',
      version_name: 'Version name',
      description: 'Version description',
      handle: 'Operation',
      current_version: 'Current version',
      versionCurrent: 'Set to the current version',
      editVersion: 'Modify',
      enterVersion: 'OK',
      dialogEnterVersion: 'Closed',
      cancelVersion: 'Cancel',
      deleteVersion: 'Delete',
      hasEdit: 'A version is under editing',
      hasSame: 'The same version name exists',
      warning: 'Prompt',
      warningInfo:
        'This operation will permanently delete this version, do you want to continue?',
      setting: 'Settings',
      export: 'Report export',
      recheck: 'Vulnerability verification',
      search_version_name: 'Version name, such as: v1',
      search_description:
        'Version description, such as: the xth iteration of the xxx business',
      pieType: 'Type',
      exportSuccess: 'Export report successful',
      exportFail: 'Export report failed',
    },
    userList: {
      keywordPlaceholder: 'Please enter the name keyword',
      addUser: 'Add user',
      editUser: 'Modify user information',
      userID: 'User ID',
      name: 'User name',
      namePlaceholder: 'Please enter the user name',
      email: 'User Email',
      emailPlaceholder: "Please enter the user's email address",
      role: 'User level',
      department: 'Department to which you belong',
      departmentPlaceholder: 'Please select the department to which you belong',
      phone: 'Contact number',
      phonePlaceholder: 'Please enter the phone number',
      operate: 'Operation',
      password: 'Password',
      passwordPlaceholder: 'Please enter your password',
      rePass: 'Confirm password',
      rePassPlaceholder: 'Please enter the password again',
      submit: 'Confirm',
      cancel: 'Cancel',
      isActive: 'Status',
      dateJoined: 'Created time',
      lastLogin: 'Login time',
      reset: 'Reset password',
      admin: 'Super administrator',
      user: 'Ordinary user',
      needPWD: 'Please enter the password',
      rePWD: 'Please enter the password again',
      diffPWD: 'The two input passwords are inconsistent',
      on: 'Enable',
      off: 'Disable',
      notLogin: 'Not logged in',
      deleteConfirm:
        "This operation will reset the user's password, do you want to continue?",
      deleteConfirmPop: 'Prompt',
      edit: 'Modify',
      del: 'Delete',
    },
    talent: {
      title: {
        add: 'Add tenant',
        modify: 'Modify tenant information',
        placeholder:
          'Please enter the tenant name to search, for example: FireWire White Hat Community',
      },
      table: {
        name: 'Tenant Name',
        enable: 'Enable status',
        create: 'Create time',
        update: 'Update time',
        modifyBy: 'operator',
        operate: 'Operation',
        open: 'Operation',
        off: 'Disable',
        on: 'Enable',
        user: 'Ordinary user',
        superAdmin: 'Super Admin',
      },
      add: {
        email: 'Email address',
        emailPlaceholder:
          'Please enter the corporate email address, note: the corporate email address must be used',
        enable: 'Enable status',
        enablePlaceholder: 'Is the tenant enabled?',
        placeholder:
          'Please enter the tenant name, note: the tenant name cannot be repeated',
        submit: 'Confirm',
        cancel: 'Cancel',
        on: 'Enable',
        off: 'Disable',
      },
    },
  },
}