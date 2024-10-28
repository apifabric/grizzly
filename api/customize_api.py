import logging
import api.system.api_utils as api_utils
import safrs
from flask import request, jsonify, send_from_directory
from safrs import jsonapi_rpc
from database import models
from database.spa_page import SPASection, SPAPage
from pathlib import Path
import yaml

app_logger = logging.getLogger(__name__)

sap_admin_yaml = """
SPAPage:
    hidden: true
    attributes:
    - label: ' name*'
      name: name
      required: true
      search: true
      sort: true
    - name: id
      required: true
    - name: contact
    tab_groups:
    - direction: tomany
      fks:
      - page_id
      name: SectionList
      resource: Section
    type: SPAPage
    user_key: name
  
SPASection:
    hidden: true
    sort: order
    attributes:
    - name: order
      type: number
      sort: true
    - label: ' name*'
      name: name
      required: true
      search: true
    - name: page_id
    - name: title
      required: true
    - name: label
      required: true
    - name: Type
    - name: paragraph
      type: textarea
    - name: content
      type: textarea
    - name: id
    - name: background
    - name: template
    - name: style
      type: json
    - name: hidden
      type: boolean
    tab_groups:
    - direction: toone
      fks:
      - page_id
      name: page
      resource: SPAPage
    type: SPASection
    user_key: name

"""
def add_spa(app, api):
    
    api.expose_object(SPASection)
    api.expose_object(SPAPage)
    admin_yaml_fn = Path('ui/admin/admin.yaml')
    
    with open (admin_yaml_fn, "r" ) as admin_fp:
        admin_yaml = yaml.safe_load(admin_fp)
    admin_yaml['resources'].update(yaml.safe_load(sap_admin_yaml))
    with open (admin_yaml_fn, "w+" ) as admin_fp:
        yaml.dump(admin_yaml, admin_fp, default_flow_style=False)
    
    @app.route('/static/<path:path>')
    def send_static(path):
        return send_from_directory('static', path)


def expose_services(app, api, project_dir, swagger_host: str, PORT: str):
    """ Customize API - new end points for services 
    
        Brief background: see readme_customize_api.md

        Your Code Goes Here
    
    """
    
    from api.api_discovery.auto_discovery import discover_services
    discover_services(app, api, project_dir, swagger_host, PORT)

    add_spa(app, api)
    
    