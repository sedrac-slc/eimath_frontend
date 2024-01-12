import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentIdUtil {
  login_register_form_input: string = 'form_input';

  dashboard_content: string = 'dashboard-content';
  dashboard_button_back: string = 'dashboard_button_back';

  math_template_breadcrumb: string = 'math_template_breadcrumb';
  math_template_info_role: string = 'math_template_info_role';
  math_template_info_exemple: string = 'math_template_info_example';
}
