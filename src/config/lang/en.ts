export default {
  log: {
    login: 'Login',
    title: 'Log Management',
    exportBtn: 'Export',
    deleteBtn: 'Delete',
    clearBtn: 'Clear',
    username: 'Username',
    handle: 'Event Info',
    handleTime: 'Operation Time',
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
    login: 'Login',
    loading: 'Loading...',
    deploy: 'Add Agent',
    logout: 'Exit',
    setOpenapi: 'Please configure openapi first',
    helpOpenapi: 'Please contact the administrator to configure openapi',
    oldPassword: 'Please enter the old password',
    newPassword: 'Please enter a new password',
    rePassword: 'Please enter the password again',
    diffPassword: 'The two input passwords are inconsistent',
  },
  menu: {
    projectEdit: 'ProjectEdit',
    home: 'Home',
    login: 'Login',
    project: 'APPLICATIONS',
    projectManage: 'Project',
    projectDetail: 'Project Details',
    vuln: 'Vulnerabilities',
    vulnList: 'Application Vulnerability List',
    vulnDetail: 'Application vulnerability details',
    sca: 'Libraries',
    scaList: 'Component management list',
    scaDetail: 'Component management details',
    setting: 'Setting',
    agentManage: 'Engine',
    strategyManage: 'Strategy',
    hookRule: 'Custom Rule',
    upgradeOnline: 'System upgrade',
    sysInfo: 'System Information',
    changePassword: 'Account',
    logManage: 'Log',
    user: 'Role Management',
    talent: 'Tenant',
    department: 'Organization',
    taintPool: 'search',
    search: 'Stain search',
    poolDetail: 'Stain details',
    serverRegister: 'Service Registration',
    language: 'Language',
    chinese: 'Chinese',
    englist: 'English',
  },
  views: {
    deploy: {
      begin: 'Select a language and start the installation',
      installing: 'Installing',
      agent: 'Agent',
      term:
        'Before the installation, please make sure to confirm the following precautions: ',
      download: 'Downloading Java Agent',
      install: 'Installing Java Agent',
      copy: 'copy',
      downloadWorld: 'Download',
      reloadTile: 'Restarting Services (For Manual Installation)',
      reloadDesc: 'Please restart your application service.',
      help: 'Instructions',
      agentInstructions: 'Agent installation instructions',
      moreDocument: 'More Document',
      moreSupport: 'More Support',
      issue: 'Submit ISSUE',
      java: {
        autoInstall: 'Automatic Installation',
        ManualInstallation: 'Manual Installation',
        autoInstallDesc:
          'Attach the DongTai Java Agent into the application by service process id with the following command:',
        term1: 'Ensure interworking between networks is available.',
        term2: `Ensure your system meet the requirement as below: 
        a. Operating system: Windows/Linux
        b. JDK version: 1.6 and above;
        c. Framework: Spring Boot
        d. Middleware: Tomcat, JBoss, Jetty, Resin, WebLogic, WebSphere
        e. DongTai IAST also supported Docker`,
        p1:
          'Start/Restart the Web Service and then access it with the browser.Once registered, the agent should appear in the Settings > Engine list.If you do not see the agent on list within a few minutes, check the following:',
        p2: '1. Check the agent.jar',
        p3:
          'Execute the following command “java -jar /temp/agent.jar” to check it is working.Please re-download the agent file and try again otherwise.If the problem still persists, you can directly report the issue to us on Github and we will get you an answer back shortly.',
        p4: '2. Check the network connection',
        p51: 'If the Web Service is unable to access to ',
        p52:
          'Please check the network connection and try again.Otherwise, you can directly report the issue to us on Github and we will get you an answer back shortly.',
      },
      python: {
        ManualInstallation: 'Manual Installation',
        term1: 'Python Version: 3.3 and above',
        term2: 'Interpreter: CPython',
        term3: 'Middleware: uWSGI',
        term4: 'Web Framework: Django',
        term5: 'Web Service: Django REST Framework',
        term6: 'Module: psutil verion should be include and above 5.8.0',
        manualInstallationDesc:
          'Extract download file with the following command.',
        settings: 'Settings',
        p1:
          'Start/Restart the Web Service and then access it with the browser.Once registered, the agent should appear in the Settings > Engine list.If you do not see the agent on list within a few minutes, check the following:',
        p2: '1. Check the dongtai-agent-python.tar.gz',
        p3:
          'Execute the following command “pip3 install ./dongtai-agent-python.tar.gz” to check it is working.Please re-download the agent file and try again otherwise.If the problem still persists, you can directly report the issue to us on Github and we will get you an answer back shortly.',
        p4:
          '2. Check the setting.py in Django application Ensure the following line is added to the MIDDLEWARE configuration.',
        p5: `'dongtai_agent_python.middlewares.django_middleware.FireMiddleware'`,
        p6: '3. Check the network connection',
        p71: 'If the Web Service is unable to access to ',
        p72:
          'Please check the network connection and try again.Otherwise, you can directly report the issue to us on Github and we will get you an answer back shortly.',
      },
    },
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
      sourceRule: 'Stain Source Method Rule',
      propRule: 'Propagation Method Rule',
      filterRule: 'Filtering Method Rule',
      dangerRule: 'Dangerous Method Rule',
      allHooksNum: 'Rule Amount',
      sinkHooksNum: 'Sink Rule Amount',
      selected: 'Selected',
      race: 'kind',
      strip: 'strip',
      selectType: 'Please select the rule type',
      addHookType: 'Add Rule Type',
      addHook: 'Add Rule',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      empty: 'No data temporarily',
      ruleInfo: 'Rule Details',
      point: 'Stain Input',
      pointOut: 'Stain Output',
      hoopDeep: 'HOOK Depth',
      children: 'Subclass',
      nowChildren: 'Current class and subclasses',
      now: 'Current class',
      openTrace: 'Enable taint tracking',
      yes: 'Yes',
      no: 'No',
      updateTime: 'Modification Date',
      user: 'Creator',
      status: 'Status',
      address: 'Settings',
      edit: 'Edit',
      delpop: 'Are you sure you want to delete it? ',
      hookType: 'Rule Set',
      hooksType: 'Rule Type',
      typeName: 'Type Name',
      namePlaceholder:
        'Please enter the type name, such as: String, StringBuilder, etc., it is recommended to use the class name',
      typeShotName: 'Type Abbreviation',
      shotNamePlaceholder:
        'Please enter the abbreviation of the type, such as: string-01, string-02, so that you can check it by yourself',
      openOrNot: 'Enabled',
      clear: 'Cancel',
      enter: 'OK',
      ruleInfoPlaceholder:
        'Please enter HOOK rules in the format: java.lang.String.<init>(java.lang.String)',
      source: 'Stain Source',
      target: 'Where the stain goes',
      relation: 'Please choose a logical relationship',
      origin: 'Please select the data source',
      paramPlaceholder: 'Parameter number, starting from 1',
      add: 'Add',
      hookTrack: 'Stain Tracking',
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
      subTitle: 'Welcome to DongTai IAST',
      user: 'Account',
      usernamePlaceholder: 'Please enter the account',
      password: 'Password',
      passwordPlaceholder: 'Please enter the password',
      captcha: 'Verification code',
      captchaPlaceholder: 'Please enter the verification code',
    },
    vulnList: {
      filter: 'Filter',
      language: 'Language',
      level: 'Severity Level',
      type: 'Vulnerability Category',
      reset: 'Reset',
      resetAll: 'Reset all',
      project_name: 'Application',
      searchExample: 'Enter search criteria, e.g.,http://127.0.0.1:8080',
      searchName: 'Enter application name',
      sort: 'Please select sort criteria',
      developLanguage: 'Please select a development language',
      vulnStatus: 'Please select the vulnerability status',
      toVeVerified: 'To be Verified',
      verification: 'Under Verification',
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
        type: 'Vulnerability Category',
        level: 'vulnerability Level',
        url: 'URL',
        latest_time: 'Reporting Time(Latest)',
        first_time: 'Report Time(Earlier)',
      },
    },
    vulnDetail: {
      source_value: 'Initial stain',
      target_value: 'Post-spread taint',
      baseInfo: 'Information',
      vulnDesc: 'Vulnerability Description',
      recheck: 'Verify',
      export: 'Export',
      delete: 'Delete',
      httpRequest: 'Request Racket',
      codeDemo: 'Vulnerable code example',
      graph: 'Stain Flow Graph',
      suggest: 'Repair suggestion',
      appInfo: 'Application Information',
      devEnv: 'Runtime Environment',
      path: 'Environmental variables',
      url: 'url',
      first_time: 'First Appearance',
      serverIp: 'Server IP',
      clientIp: 'Client IP',
      language: 'Language',
      port: 'Port',
      projectName: 'Application',
      level: 'Severity Level',
      counts: 'Number of Occurrences',
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
      taintValue: 'Attack Vector',
      taintParamName: 'Attack Parameters',
      agent: 'Probe',
      version: 'Application Version',
      reload: 'Refresh',
      has: 'exist',
      vule: 'vulnerability',
      is: 'of',
      reqHas: 'Request appears',
      position: 'Position',
      untreated: 'Untreated',
      replay: 'Request Replay',
      stainSource: 'Stain Source',
      communicationMethod: 'Taint Flag',
      dangerMethod: 'Sink',
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
      vuln: 'vulnerability',
    },
    scaList: {
      filter: 'Filter',
      language: 'Language',
      level: 'Level',
      type: 'Type',
      reset: 'Reset',
      resetAll: 'Reset all',
      project_name: 'Application',
      searchExample: 'Please enter search criteria, such as: spring',
      searchName: 'Please enter the application to search',
      sort: 'Please select sort criteria',
      developLanguage: 'Please select a development language',
      orderOptions: {
        project_name: 'Application',
        level: 'Severity',
        package_name: 'Component',
        version: 'Version',
        language: 'Language',
        vul_count: 'Amount',
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
        name: 'Component',
        version: 'Component Version',
        application: 'Owned Application',
        language: 'Language',
        level: 'Severity Level',
        count: 'Vulnerability Amount',
        time: 'Discover Time',
        componentInfo: 'Component Information',
        dataTest: 'Data packet debugging',
      },
    },
    scaDetail: {
      agent: 'Probe',
      version_now: 'Application Version',
      version: 'Component Version',
      level: 'Severity',
      project_name: 'Application',
      vul_count: 'vulnerability Amount',
      unit: 'unit',
      signature_value: 'Component Hash',
      vulList: 'Vulnerability List',
      cveNumber: 'CVE Number',
      cweNumber: 'CWE Number',
      vulName: 'Vulnerability',
      vulLevel: 'Severity Level',
      safeVersion: 'Remediation Version',
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
      confirmNewPassword: 'Confirm New Password',
      submit: 'Save',
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
      not_running: 'stopped',
      is_core_running: 'Core component running',
      is_core_not_running: 'Core component is stopped',
      offline: 'Offline',
      normal: 'Normal',
      state: 'Engine state',
      searchValue: 'Please enter search criteria',
      choose: 'Selected',
      strip: 'strip',
      on: 'Enable',
      off: 'Disable',
      del: 'Delete',
      flow: 'Requests',
      address: 'Server Address',
      payload: 'Server Load',
      status: 'Running status',
      manage: 'Settings',
      owner: 'User',
      timestapm: 'Time',
      projectName: 'Application',
      healthy: 'Health',
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
      name: 'Policy',
      detail: 'Description',
      status: 'Enabled',
      operate: 'Operation',
      settings: 'settings',
      fix: 'Recommendation',
      addChildren: 'Add Group',
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
      title: 'APPLICATIONS',
      name: 'APPLICATION',
      vul: 'Issues',
      agent: 'Agent Amount',
      owner: 'User',
      time: 'Modified Date',
      manage: 'Settings',
      add: 'New Application',
      searchName: 'Please enter the Application',
    },
    projectEdit: {
      save: 'Save',
      clear: 'Cancel',
      addScan: 'Create a strategy',
      scanName: 'Policy name',
      fid: 'vulnerability Category',
      selectAll: 'Select all',
      back: 'Return',
      title: 'Settings',
      name: 'Application Name',
      namePlaceholder: 'Please enter the application',
      mode: 'Scan Mode',
      mode1: 'Instrumentation Mode',
      mode2: 'Traffic mode',
      agent: 'Agent',
      agentPlaceholder: 'Please select Agent',
      scan: 'Scan Rule',
      scanPlaceholder: 'Please select a scan strategy',
      scanAdd: 'New Rule Template',
      added: 'Advanced Settings',
      submit: 'Save',
      version_name: 'Application Version',
      versionNamePlaceholder: 'Please enter the version number',
      description: 'Version Description',
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
      owner: 'User',
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
      addUser: 'Add User',
      editUser: 'User Information',
      userID: 'User ID',
      name: 'Username',
      namePlaceholder: 'Please enter the username',
      email: 'Email',
      emailPlaceholder: "Please enter the user's email address",
      role: 'Roles',
      department: 'Department',
      departmentPlaceholder: 'Please select the department to which you belong',
      phone: 'Contact Number',
      phonePlaceholder: 'Please enter the phone number',
      operate: 'Settings',
      password: 'Password',
      passwordPlaceholder: 'Please enter your password',
      rePass: 'Confirm Password',
      rePassPlaceholder: 'Please enter the password again',
      submit: 'Save',
      cancel: 'Cancel',
      isActive: 'Status',
      dateJoined: 'Creation Time',
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
        add: 'Add Tenant',
        modify: 'Modify tenant information',
        placeholder:
          'Please enter the tenant name to search, for example: FireWire White Hat Community',
      },
      table: {
        name: 'Tenant',
        enable: 'Status',
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
        email: 'Email',
        emailPlaceholder:
          'Please enter the corporate email address, note: the corporate email address must be used',
        enable: 'Status',
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
